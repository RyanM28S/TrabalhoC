let number = 1;
let respondeu = false;

const opcao1 = document.getElementById("opcao1");
const opcao2 = document.getElementById("opcao2");
const opcao3 = document.getElementById("opcao3");
const opcao4 = document.getElementById("opcao4");
const texto = document.getElementById("texto");
const explica = document.getElementById("explica");
const qp = document.getElementById("QP");
const btnProximo = document.getElementById("proximo");

function revelarRespostas() {
  respondeu = true;
  explica.classList.add("aparece");

  if (number === 1) {
    opcao1.classList.add("opcaov");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaof");
    texto.innerHTML = `Explicação da pergunta 1`;
  } else if (number === 2) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaov");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaof");
    texto.innerHTML = `Explicação da pergunta 2`;
  } else if (number === 3) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaov");
    opcao4.classList.add("opcaof");
    texto.innerHTML = `Explicação da pergunta 3`;
  } else if (number === 4) {
    opcao1.classList.add("opcaof");
    opcao2.classList.add("opcaof");
    opcao3.classList.add("opcaof");
    opcao4.classList.add("opcaov");
    texto.innerHTML = `Explicação da pergunta 4`;
  }
}


[opcao1, opcao2, opcao3, opcao4].forEach((opcao) => {
  opcao.addEventListener("click", () => {
    if (respondeu) return;
    revelarRespostas();
  });
});

btnProximo.addEventListener("click", (event) => {
  event.preventDefault();

  if (respondeu === true) {
    btnProximo.classList.remove("exemplo");
    explica.classList.remove("aparece"); 

    const pergunta = document.getElementById("pergunta");

    [opcao1, opcao2, opcao3, opcao4].forEach((el) => {
      el?.classList.remove("opcaov", "opcaof");
    });

    number++;
    respondeu = false;

    if (number === 2) {
      qp.innerHTML = `Pergunta 2 de 4`;
      pergunta.innerHTML = `não sei pergunta? 2`;
      opcao1.innerHTML = `nova1 2`;
      opcao2.innerHTML = `nova2 2`;
      opcao3.innerHTML = `nova3 2`;
      opcao4.innerHTML = `nova4 2`;
    } else if (number === 3) {
      qp.innerHTML = `Pergunta 3 de 4`;
      pergunta.innerHTML = `não sei pergunta? 3`;
      opcao1.innerHTML = `nova1 3`;
      opcao2.innerHTML = `nova2 3`;
      opcao3.innerHTML = `nova3 3`;
      opcao4.innerHTML = `nova4 3`;
    } else if (number === 4) {
      qp.innerHTML = `Pergunta 4 de 4`;
      pergunta.innerHTML = `não sei pergunta? 4`;
      opcao1.innerHTML = `nova1 4`;
      opcao2.innerHTML = `nova2 4`;
      opcao3.innerHTML = `nova3 4`;
      opcao4.innerHTML = `nova4 4`;
    } else if (number === 5 ) {
        window.location.href = "index.html"
    }
  } else {
    btnProximo.classList.add("exemplo");
  }
});