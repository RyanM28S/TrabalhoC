const input1 = document.querySelector(".inpun1");
const input2 = document.querySelector(".inpun2");
const teclado = document.getElementById("teclado");
const btnCorrige = document.querySelector(".corrige");

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

function ir() {
  const numero = input1.value + input2.value;
  if (numero === "14" || numero === "15" || numero === "16") {
    if (numero === "14") {
      alert("o que voce quiser");
      setTimeout(() => {
        window.location.href = `urna${numero}.html`;
      }, 2000);
    } else if (numero === "15") {
      alert("o que voce quiser");

      setTimeout(() => {
        window.location.href = `urna${numero}.html`;
      }, 2000);
    } else if (numero === "16") {
      alert("o que voce quiser");

      setTimeout(() => {
        window.location.href = `urna${numero}.html`;
      }, 2000);
    }
  } else {
    alert("Digite um número válido");
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
