$(function () {
  // Máscara para número da camisa
  $("#numero").mask("00", {
    translation: {
      0: { pattern: /[0-9]/ },
    },
    onComplete: function (val) {
      const num = parseInt(val, 10);
      if (num < 1 || num > 99) {
        alert("Número inválido. Use apenas número entre 1 a 99.");
        $("#numero").val("");
      } else {
        $("#numero").val(num);
      }
    },
  });

  // Máscara para idade
  $("#idade").mask("00", {
    translation: {
      0: { pattern: /[0-9]/ },
    },
    onComplete: function (val) {
      const idadeNum = parseInt(val, 10);
      if (idadeNum < 16 || idadeNum > 60) {
        alert("Idade inválida. Deve estar entre 16 e 60 anos.");
        $("#idade").val("");
      } else {
        $("#idade").val(idadeNum);
      }
    },
  });
});

// Validação e envio do formulário
document
  .getElementById("formJogador")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const posicao = document.getElementById("posicao").value;
    const numero = document.getElementById("numero").value.trim();
    const idade = document.getElementById("idade").value.trim();
    const nacionalidade = document.getElementById("nacionalidade").value.trim();

    // Validação com regex
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ ]{1,50}$/;
    if (!regexNome.test(nome)) {
      alert(
        "Nome inválido. Use apenas letras e espaços, com até 50 caracteres."
      );
      return;
    }

    const regexNumero = /^(?:[1-9]|[1-9][0-9])$/; //
    if (!regexNumero.test(numero)) {
      alert("Número inválido. Use apenas número entre 1 a 99.");
      return;
    }

    const regexIdade = /^(?:1[6-9]|[2-5][0-9]|60)$/; //
    if (!regexIdade.test(idade)) {
      alert("Idade inválida. Deve estar entre 16 e 60 anos.");
      return;
    }

    if (!nome || !posicao || !numero || !idade || !nacionalidade) {
      alert("Preencha todos os campos.");
      return;
    }

    // Verifica clube logado
    const clubeLogado = JSON.parse(localStorage.getItem("clubeLogado"));
    if (!clubeLogado) {
      alert("Nenhum clube logado.");
      window.location.href = "index.html";
      return;
    }

    // Cria objeto do jogador com clubeId
    const novoJogador = {
      nome,
      posicao,
      numero,
      idade,
      nacionalidade,
      clubeId: clubeLogado.id,
    };

    try {
      // Envia jogador para o servidor via POST
      const response = await fetch("http://localhost:3000/jogadores", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoJogador),
      });

      if (!response.ok) {
        throw new Error("Erro ao salvar jogador no servidor.");
      }

      const jogadorSalvo = await response.json();

      // Atualiza localStorage do clube
      clubeLogado.jogadores = clubeLogado.jogadores || [];
      clubeLogado.jogadores.push(jogadorSalvo);
      localStorage.setItem("clubeLogado", JSON.stringify(clubeLogado));

      // Atualiza lista de clubes no localStorage
      let clubes = JSON.parse(localStorage.getItem("clubes")) || [];
      clubes = clubes.map((c) => (c.id === clubeLogado.id ? clubeLogado : c));
      localStorage.setItem("clubes", JSON.stringify(clubes));

      alert("Jogador cadastrado com sucesso!");
      window.location.href = "home.html";
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar jogador.");
    }
  });
