const roteiro = [
  {
    elementoId: "fala-1",
    texto: "Pare por um segundo e olhe para o que acabou de acontecer na urna. Você tentou digitar outras opções, tentou procurar alternativas... mas o sistema barrou todas elas. Você nunca teve voz nessa escolha.",
    acaoAntes: null,
    acaoDepois: () => revelarTarja("censura-1")
  },
  {
    elementoId: "fala-2",
    texto: "Tudo já estava decidido antes mesmo de você entrar na cabine. Entre 1964 e 1985, partidos foram extintos por decreto, adversários políticos tiveram seus direitos cassados e o presidente não era escolhido pelo voto direto do povo.",
    acaoAntes: () => document.getElementById("box-ditadura").classList.add("visivel"),
    acaoDepois: () => {
      revelarTarja("censura-2");
      revelarTarja("censura-3");
    }
  },
  {
    elementoId: "fala-3",
    texto: "Naquele tempo, discordar do governo podia custar o emprego, a liberdade ou até a própria vida. Jornais, músicas e peças de teatro eram cortados antes de chegar às pessoas.",
    acaoAntes: null,
    acaoDepois: () => revelarTarja("censura-4")
  },
  {
    elementoId: "fala-4",
    texto: "Hoje, a nossa democracia ainda está longe de ser perfeita — e nós podemos, e devemos, criticar o que está errado. Mas perceba o tamanho da conquista: hoje você pode criticar sem medo da censura, pode escolher entre dezenas de caminhos e o seu voto realmente decide o futuro. Estamos muito melhores hoje porque recuperamos o direito de escolher.",
    acaoAntes: () => document.getElementById("box-hoje").classList.add("visivel"),
    acaoDepois: () => finalizarExperiencia()
  }
];

let pulou = false;
let timeoutAtual = null;

function revelarTarja(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add("revelado");
}

function finalizarExperiencia() {
  document.getElementById("btn-reiniciar").classList.add("pronto");
  document.getElementById("btn-pular").style.display = "none";
}

function digitarTexto(elemento, texto, callback) {
  let i = 0;
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  elemento.appendChild(cursor);

  function escreverCaractere() {
    if (pulou) return;

    if (i < texto.length) {
      cursor.insertAdjacentText("beforebegin", texto.charAt(i));
      i++;

      const charAtual = texto.charAt(i - 1);
      let velocidade = 24;
      if (charAtual === "." || charAtual === "—") velocidade = 260;
      else if (charAtual === ",") velocidade = 110;

      timeoutAtual = setTimeout(escreverCaractere, velocidade);
    } else {
      cursor.remove();
      if (callback) setTimeout(callback, 400);
    }
  }

  escreverCaractere();
}

function executarRoteiro(indice) {
  if (pulou || indice >= roteiro.length) return;

  const passo = roteiro[indice];
  const el = document.getElementById(passo.elementoId);

  if (passo.acaoAntes) passo.acaoAntes();

  digitarTexto(el, passo.texto, () => {
    if (passo.acaoDepois) passo.acaoDepois();
    executarRoteiro(indice + 1);
  });
}

function pularAnimacao() {
  pulou = true;
  clearTimeout(timeoutAtual);

  roteiro.forEach(passo => {
    if (passo.acaoAntes) passo.acaoAntes();
    const el = document.getElementById(passo.elementoId);
    el.textContent = passo.texto;
    if (passo.acaoDepois) passo.acaoDepois();
  });

  finalizarExperiencia();
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => executarRoteiro(0), 500);
});
