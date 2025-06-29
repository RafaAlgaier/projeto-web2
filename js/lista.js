document.addEventListener("DOMContentLoaded", async function () {
  // Verifica se há clube logado
  const clubeLogado = JSON.parse(localStorage.getItem("clubeLogado"));
  if (!clubeLogado) {
    window.location.href = "index.html";
    return;
  }

  const tituloJogadores = document.getElementById("tituloJogadores");
  const jogadoresClube = document.getElementById("jogadoresClube");
  const listaJogadores = document.getElementById("listaJogadores");

  const clubeSelecionadoId = localStorage.getItem("clubeSelecionado");
  if (!clubeSelecionadoId) {
    listaJogadores.innerHTML =
      "<p class='text-center text-danger'>Nenhum clube selecionado.</p>";
    return;
  }

  // Para controle visual e permissões
  const podeEditar =
    clubeLogado.id.toString() === clubeSelecionadoId.toString();

  tituloJogadores.textContent = "Carregando jogadores...";
  listaJogadores.innerHTML = "";

  try {
    const response = await fetch(
      `http://localhost:3000/jogadores?clubeId=${clubeSelecionadoId}`
    );
    const jogadores = await response.json();

    const clubes = JSON.parse(localStorage.getItem("clubes")) || [];
    const clubeSelecionado = clubes.find(
      (clube) => clube.id.toString() === clubeSelecionadoId.toString()
    );

    tituloJogadores.textContent = clubeSelecionado
      ? `Jogadores do ${clubeSelecionado.nome}`
      : "Jogadores";

    if (jogadores.length === 0) {
      listaJogadores.innerHTML =
        "<p class='text-center aviso-sem-jogadores'>Nenhum jogador cadastrado.</p>";
    } else {
      const row = document.createElement("div");
      row.className = "row g-3";

      jogadores.forEach((jogador) => {
        const col = document.createElement("div");
        col.className = "col-12 col-md-6 col-lg-4";

        const card = document.createElement("div");
        // Adicionando animação Animate.css no card:
        card.className =
          "card bg-light text-dark shadow-sm animate__animated animate__fadeInUp";

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const nomeEl = document.createElement("h5");
        nomeEl.className = "card-title";
        nomeEl.textContent = jogador.nome;

        const posicaoEl = document.createElement("p");
        posicaoEl.className = "card-text mb-1";
        posicaoEl.textContent = `Posição: ${jogador.posicao}`;

        const numeroEl = document.createElement("p");
        numeroEl.className = "card-text mb-1";
        numeroEl.textContent = `Número: ${jogador.numero}`;

        const idadeEl = document.createElement("p");
        idadeEl.className = "card-text mb-1";
        idadeEl.textContent = `Idade: ${jogador.idade}`;

        const nacEl = document.createElement("p");
        nacEl.className = "card-text";
        nacEl.textContent = `Nacionalidade: ${jogador.nacionalidade}`;

        cardBody.append(nomeEl, posicaoEl, numeroEl, idadeEl, nacEl);
        card.appendChild(cardBody);

        if (podeEditar) {
          const cardFooter = document.createElement("div");
          cardFooter.className =
            "card-footer d-flex justify-content-between gap-2";

          const btnEditar = document.createElement("button");
          btnEditar.className = "btn btn-sm btn-editar-custom w-100";
          btnEditar.textContent = "Editar";
          btnEditar.addEventListener("click", () => {
            localStorage.setItem("jogadorEdicao", JSON.stringify(jogador));
            window.location.href = "jogador.html";
          });

          const btnExcluir = document.createElement("button");
          btnExcluir.className = "btn btn-sm btn-danger w-100";
          btnExcluir.textContent = "Excluir";
          btnExcluir.addEventListener("click", () => {
            if (confirm(`Deseja excluir o jogador ${jogador.nome}?`)) {
              excluirJogador(jogador.id);
            }
          });

          cardFooter.append(btnEditar, btnExcluir);
          card.appendChild(cardFooter);
        }

        col.appendChild(card);
        row.appendChild(col);
      });

      listaJogadores.appendChild(row);
    }
  } catch (error) {
    listaJogadores.innerHTML =
      "<p class='text-center text-danger'>Erro ao carregar jogadores.</p>";
    console.error(error);
  }

  jogadoresClube.classList.remove("d-none");

  const btnVoltar = document.getElementById("btnVoltar");
  if (btnVoltar) {
    btnVoltar.addEventListener("click", () => {
      window.history.back();
    });
  }

  // Função para excluir jogador com atualização do localStorage
  async function excluirJogador(jogadorId) {
    try {
      const response = await fetch(
        `http://localhost:3000/jogadores/${jogadorId}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Erro ao excluir jogador.");

      alert("Jogador excluído com sucesso!");

      // Atualiza o localStorage
      let clubes = JSON.parse(localStorage.getItem("clubes")) || [];
      let clubeLogado = JSON.parse(localStorage.getItem("clubeLogado"));

      clubeLogado.jogadores = (clubeLogado.jogadores || []).filter(
        (j) => j.id !== jogadorId
      );

      localStorage.setItem("clubeLogado", JSON.stringify(clubeLogado));

      clubes = clubes.map((c) => (c.id === clubeLogado.id ? clubeLogado : c));
      localStorage.setItem("clubes", JSON.stringify(clubes));

      location.reload();
    } catch (err) {
      alert("Erro ao excluir jogador.");
      console.error(err);
    }
  }
});
