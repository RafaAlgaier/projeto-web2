document.addEventListener("DOMContentLoaded", function () {
  // Verifica se há clube logado
  const clubeLogado = JSON.parse(localStorage.getItem("clubeLogado"));
  if (!clubeLogado) {
    window.location.href = "index.html";
    return;
  }

  // Exibe o nome do clube logado na navbar
  const tituloClube = document.getElementById("tituloClube");
  if (tituloClube) {
    tituloClube.textContent = `Bem-vindo, ${clubeLogado.nome}`;
  }

  // Lista os clubes
  const clubes = JSON.parse(localStorage.getItem("clubes")) || [];
  clubes.sort((a, b) => a.nome.localeCompare(b.nome));

  const listaClubes = document.getElementById("listaClubes");

  clubes.forEach((clube) => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const card = document.createElement("div");
    card.className =
      "card text-dark bg-light border border-0 shadow-sm card-hover";
    card.style.cursor = "pointer";

    card.innerHTML = `
      ${
        clube.logo
          ? `<img src="${clube.logo}" class="card-img-top clube-logo" alt="Logo do clube">`
          : ""
      }
      <div class="card-body">
        <h5 class="card-title">${clube.nome}</h5>
        <p class="card-text">${clube.cidade || "Cidade não informada"}</p>
      </div>
    `;

    card.addEventListener("click", function () {
      localStorage.setItem("clubeSelecionado", clube.id);
      window.location.href = "lista.html";
    });

    col.appendChild(card);
    listaClubes.appendChild(col);
  });

  // Botão de logout padrão
  const logoutBtn = document.getElementById("btnLogout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("clubeLogado");
      window.location.href = "login.html";
    });
  }

  // Botão de logout no dropdown
  const logoutDropdownBtn = document.getElementById("btnLogoutDropdown");
  if (logoutDropdownBtn) {
    logoutDropdownBtn.addEventListener("click", function () {
      localStorage.removeItem("clubeLogado");
      window.location.href = "login.html";
    });
  }

  // Botão "Meus Jogadores"
  const meuBtn = document.getElementById("meusJogadoresBtn");
  if (meuBtn) {
    meuBtn.addEventListener("click", function (e) {
      e.preventDefault();
      if (clubeLogado) {
        localStorage.setItem("clubeSelecionado", clubeLogado.id);
        window.location.href = "lista.html";
      }
    });
  }
});

$(function () {
  $(".card").hover(
    function () {
      $(this).addClass("shadow-lg");
    },
    function () {
      $(this).removeClass("shadow-lg");
    }
  );
});
