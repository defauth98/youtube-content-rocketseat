function log(message) {
  console.log("> " + message);
}

//Seleciona os elementos na DOM do HTML
const cards = document.querySelectorAll(".card");
const dropzones = document.querySelectorAll(".dropzone");

// Adiciona os listeners para cada card
cards.forEach((card) => {
  card.addEventListener("dragstart", dragstart);
  card.addEventListener("drag", drag);
  card.addEventListener("dragend", dragend);
});

// Começou a fazer o drag
function dragstart() {
  // log("CARD: Start dragging!");
  dropzones.forEach((dropzone) => dropzone.classList.add("highligth"));

  this.classList.add("is-dragging");
}

// Enquanto esta fazendo o drag
function drag() {
  // log("CARD: Start dragging!");
}

// Acabou de fazer o drag
function dragend() {
  // log("CARD: Stop drag!");
  dropzones.forEach((dropzone) => dropzone.classList.remove("highligth"));

  this.classList.remove("is-dragging");
}

dropzones.forEach((dropzone) => {
  dropzone.addEventListener("dragenter", dragenter);
  dropzone.addEventListener("dragover", dragover);
  dropzone.addEventListener("dragleave", dragleave);
  dropzone.addEventListener("drop", drop);
});

function dragenter() {
  // log("DROPZONE: Enter in zone");
}

// Enquanto ele estiver em cima
function dragover() {
  // this = dropzone

  // log("DROPZONE: Over");
  this.classList.add("over");

  // Pegar o card que esta sendo movido
  const cardBeingDragged = document.querySelector(".is-dragging");

  this.appendChild(cardBeingDragged);
}

function dragleave() {
  // log("DROPZONE: Leave");
  this.classList.remove("over");
}

function drop() {
  // log("DROPZONE: Dropped");
  this.classList.remove("over");
}
