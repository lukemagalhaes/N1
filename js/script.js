const btnMobile = document.getElementById('button-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

var technologyTitle = document.getElementById("technologyTitle");
var technologyParagraph = document.getElementById("technologyParagraph");
var technologyImg = document.getElementById("technologyImg");

function technologyBtn1() {
  technologyTitle.textContent = "nada1";
  technologyParagraph.textContent = "nada";
  technologyImg.src = "/assets/technology/image-space-capsule-portrait.jpg";
}

function technologyBtn2() {
  technologyTitle.textContent = "nada2";
  technologyParagraph.textContent = "nada";
  technologyImg.textContent = "nada";
}

function technologyBtn3() {
  technologyTitle.textContent = "nada3";
  technologyParagraph.textContent = "nada";
  technologyImg.textContent = "nada";
}