const contador = document.querySelector(".contador");
const contadorP = document.querySelector(".contador-total");
const maisBtn = document.querySelector(".mais");
const menosBtn = document.querySelector(".menos");

let num = 0;

contador.addEventListener("click", (e) => {
  if (e.target === maisBtn) {
    num += 1;
    contadorP.innerText = num;
  }
  if (e.target === menosBtn) {
    num -= 1;
    if (num < 0) {
      num = 0;
    }
    contadorP.innerText = num;
  }
});
