const input1 = document.querySelector(".inpun1");
const input2 = document.querySelector(".inpun2");
const teclado = document.getElementById("teclado");
const btnCorrige = document.querySelector(".corrige");

let tempoToast;

function mostrarToast(mensagem) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = mensagem;
  toast.classList.add("mostrar");

  clearTimeout(tempoToast);
  tempoToast = setTimeout(() => {
    toast.classList.remove("mostrar");
  }, 3500);
}

input1.addEventListener("input", () => {
  if (input1.value.length === 1) {
    input2.focus();
  }
});

input2.addEventListener("keydown", (event) => {
  if (event.key === "Backspace" && input2.value === "") {
    input1.value = "";
    input1.focus();
  }
});

function iniciarTensao(titulo, subtitulo, destino) {
  const overlay = document.getElementById("alerta-tensao");
  const elTitulo = document.getElementById("alerta-titulo");
  const elSubtitulo = document.getElementById("alerta-subtitulo");
  const barra = document.getElementById("barra-preenchimento");

  elTitulo.textContent = titulo;
  elSubtitulo.textContent = subtitulo;

  // Reseta e inicia a barra de progresso
  barra.style.transition = "none";
  barra.style.width = "0%";
  void barra.offsetWidth;

  overlay.classList.add("ativo");
  barra.style.transition = "width 3s linear";
  barra.style.width = "100%";

  setTimeout(() => {
    window.location.href = destino;
  }, 3000);
}

let tempoRedirecionamento;

function iniciarTensao(titulo, subtitulo, destino) {
  const overlay = document.getElementById("alerta-tensao");
  const elTitulo = document.getElementById("alerta-titulo");
  const elSubtitulo = document.getElementById("alerta-subtitulo");
  const barra = document.getElementById("barra-preenchimento");

  elTitulo.textContent = titulo;
  elSubtitulo.textContent = subtitulo;

  // Reseta a barra antes de iniciar a contagem de 4 segundos
  barra.style.transition = "none";
  barra.style.width = "0%";
  void barra.offsetWidth;

  overlay.classList.add("ativo");
  barra.style.transition = "width 4s linear";
  barra.style.width = "100%";

  clearTimeout(tempoRedirecionamento);
  tempoRedirecionamento = setTimeout(() => {
    window.location.href = destino;
  }, 4000);
}

// Ação do botão DESISTIR
document.getElementById("btn-desistir").addEventListener("click", () => {
  clearTimeout(tempoRedirecionamento);
  const overlay = document.getElementById("alerta-tensao");
  overlay.classList.remove("ativo");

  // Limpa os campos para o usuário digitar outro número
  input1.value = "";
  input2.value = "";
  input1.focus();
});

function ir() {
  const numero = input1.value + input2.value;

  if (numero === "11") {
    window.location.href = `urna${numero}.html`;
  } else if (numero === "13") {
    iniciarTensao(
      "VOCÊ TEM CERTEZA DISSO?",
      "ESTE TERMINAL ESTÁ SENDO OBSERVADO. SUA OPÇÃO SERÁ REGISTRADA NOS ARQUIVOS DO DEPARTAMENTO.",
      "urna13.html",
    );
  } else if (numero === "15") {
    iniciarTensao(
      "ADVERTÊNCIA DE SEGURANÇA",
      "TEM CERTEZA QUE DESEJA CONFIRMAR ESTE CANDIDATO? O VOTO NÃO É SECRETO NESTE TERMINAL.",
      "urna15.html",
    );
  } else {
    mostrarToast("Número inválido! Escolha um número válido (11, 15 ou 13).");
  }
}
btnCorrige.addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  input1.focus();
});

teclado.addEventListener("click", (event) => {
  const botao = event.target.closest("button");
  if (!botao || !teclado.contains(botao)) return;

  const { number } = botao.dataset;
  if (!number) return;

  if (input1.value.trim() === "") {
    input1.value = number;
    input2.focus();
  } else if (input2.value.trim() === "") {
    input2.value = number;
  }
});
