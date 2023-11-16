const numForm = document.querySelector("#num-form");
const numInput = document.querySelector("#num-form input");

const numForm2 = document.querySelector("#num-form2");
const numInput2 = document.querySelector("#num-form2 input");

const drawMachine = document.querySelector("#choiceResult");
const drawResult = document.querySelector("#Result");

function numForm2Submit(event) {
  event.preventDefault();
  drawMachine.classList.remove("hidden");
  drawResult.classList.remove("hidden");
  drawMachine.innerText = `You chose: ${numInput2.value}, the machine chose:  .`;
  drawResult.innerText = "You lost!";
}

numForm2.addEventListener("submit", numForm2Submit);




Math.floor(Math.random() * )