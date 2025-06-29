// js/login.js

document
  .getElementById("formLogin")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const nomeClube = document.getElementById("time").value.trim(); // ID corrigido
    const senha = document.getElementById("senha").value;

    if (!nomeClube || !senha) {
      alert("Por favor, preencha nome do clube e senha.");
      return;
    }

    // Pega a lista de clubes salvos no localStorage
    const clubes = JSON.parse(localStorage.getItem("clubes")) || [];

    // Busca o clube que bate com nome e senha
    const clube = clubes.find(
      (c) =>
        c.nome.toLowerCase() === nomeClube.toLowerCase() && c.senha === senha
    );

    if (!clube) {
      alert("Clube ou senha incorretos.");
      return;
    }

    // Define o clube logado para sessão
    localStorage.setItem("clubeLogado", JSON.stringify(clube));

    // Redireciona para home
    window.location.href = "home.html";
  });
