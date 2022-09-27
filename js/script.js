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
  technologyTitle.textContent = "LAUNCH VEHICLE";
  technologyParagraph.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  technologyImg.src = `/assets/technology/image-launch-vehicle-landscape.jpg`;
}

function technologyBtn2() {
  technologyTitle.textContent = "SPACEPORT";
  technologyParagraph.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  technologyImg.src = `/assets/technology/image-spaceport-landscape.jpg`;
}

function technologyBtn3() {
  technologyTitle.textContent = "SPACE CAPSULE";
  technologyParagraph.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  technologyImg.src = `/assets/technology/image-space-capsule-landscape.jpg`;
}