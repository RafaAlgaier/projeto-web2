document
  .getElementById("formClube")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nomeClube").value.trim();
    const cidade = document.getElementById("cidade").value.trim();
    const senha = document.getElementById("senhaClube").value;
    const logoInput = document.getElementById("logo");

    if (!nome || !senha || !logoInput.files[0]) {
      alert(
        "Por favor, preencha o nome do clube, a senha e selecione uma logo."
      );
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      const logoBase64 = e.target.result;

      const clube = {
        id: Date.now(),
        nome,
        cidade,
        senha,
        logo: logoBase64, // salva logo como Base64
        jogadores: [],
      };

      localStorage.setItem("clubeLogado", JSON.stringify(clube));

      const clubesSalvos = JSON.parse(localStorage.getItem("clubes")) || [];
      clubesSalvos.push(clube);
      localStorage.setItem("clubes", JSON.stringify(clubesSalvos));

      window.location.href = "home.html";
    };

    reader.readAsDataURL(logoInput.files[0]); // converte o arquivo para Base64
  });
