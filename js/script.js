const btnMobile = document.getElementById('button-mobile');

function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

var technologyTitle = document.getElementById("technologyTitle");
var technologyParagraph = document.getElementById("technologyParagraph");
var technologyImg = document.getElementById("technologyImg");
var technologyImgLandscape = document.getElementById("technologyImgLandscape")
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

function technologyBtn1() {
  technologyTitle.textContent = "LAUNCH VEHICLE";
  technologyParagraph.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  technologyImg.srcset = `/assets/technology/image-launch-vehicle-portrait.jpg`;
  technologyImgLandscape.src = `/assets/technology/image-launch-vehicle-landscape.jpg`;
  btn1.style.backgroundColor = "#fff"
  btn1.style.color = "#000"
  btn2.style.backgroundColor = "#ffffff00"
  btn2.style.color = "#fff"
  btn3.style.backgroundColor = "#ffffff00"
  btn3.style.color = "#fff"
}

function technologyBtn2() {
  technologyTitle.textContent = "SPACEPORT";
  technologyParagraph.textContent = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  technologyImg.srcset = `/assets/technology/image-spaceport-portrait.jpg`;
  technologyImgLandscape.src = `/assets/technology/image-spaceport-landscape.jpg`;
  btn1.style.backgroundColor = "#ffffff00"
  btn1.style.color = "#fff"
  btn2.style.backgroundColor = "#ffffff"
  btn2.style.color = "#000"
  btn3.style.backgroundColor = "#ffffff00"
  btn3.style.color = "#fff"
}

function technologyBtn3() {
  technologyTitle.textContent = "SPACE CAPSULE";
  technologyParagraph.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  technologyImg.srcset = `/assets/technology/image-space-capsule-portrait.jpg`;
  technologyImgLandscape.src = `/assets/technology/image-space-capsule-landscape.jpg`;
  btn1.style.backgroundColor = "#ffffff00"
  btn1.style.color = "#fff"
  btn2.style.backgroundColor = "#ffffff00"
  btn2.style.color = "#fff"
  btn3.style.backgroundColor = "#ffffff"
  btn3.style.color = "#000"
}

var destinationTitle = document.getElementById("destinationTitle");
var destinationParagraph = document.getElementById("destinationParagraph");
var destinationDistance = document.getElementById("destinationDistance");
var destinationDays = document.getElementById("destinationDays");
var destinationImg = document.getElementById("destinationImg");
var selectMoon = document.getElementById("destinationMoon");
var selectMars = document.getElementById("destinationMars");
var selectEuropa = document.getElementById("destinationEuropa");
var selectTitan = document.getElementById("destinationTitan");

function destinationMoon() {
  destinationTitle.textContent = "MOON";
  destinationParagraph.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  destinationDistance.textContent = "384,400 km";
  destinationDays.textContent = "3 days"
  destinationImg.src = "/assets/destination/image-moon.png"
  selectMoon.style.borderBottom = "thick solid #ffffff";
  selectMars.style.borderBottom = "thick solid #ffffff00";;
  selectEuropa.style.borderBottom = "thick solid #ffffff00";;
  selectTitan.style.borderBottom = "thick solid #ffffff00";;
}

function destinationMars() {
  destinationTitle.textContent = "MARS";
  destinationParagraph.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  destinationDistance.textContent = "225 MIL. km";
  destinationDays.textContent = "9 months"
  destinationImg.src = "/assets/destination/image-mars.png"
  selectMoon.style.borderBottom = "thick solid #ffffff00";
  selectMars.style.borderBottom = "thick solid #ffffff";;
  selectEuropa.style.borderBottom = "thick solid #ffffff00";;
  selectTitan.style.borderBottom = "thick solid #ffffff00";;
}

function destinationEuropa(){
  destinationTitle.textContent = "EUROPA";
  destinationParagraph.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  destinationDistance.textContent = "628 MIL. km";
  destinationDays.textContent = "3 years"
  destinationImg.src = "/assets/destination/image-europa.png"
  selectMoon.style.borderBottom = "thick solid #ffffff00";
  selectMars.style.borderBottom = "thick solid #ffffff00";;
  selectEuropa.style.borderBottom = "thick solid #ffffff";;
  selectTitan.style.borderBottom = "thick solid #ffffff00";;
}

function destinationTitan() {
  destinationTitle.textContent = "TITAN";
  destinationParagraph.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  destinationDistance.textContent = "1.6 BIL. km";
  destinationDays.textContent = "7 years"
  destinationImg.src = "/assets/destination/image-titan.png"
  selectMoon.style.borderBottom = "thick solid #ffffff00";
  selectMars.style.borderBottom = "thick solid #ffffff00";;
  selectEuropa.style.borderBottom = "thick solid #ffffff00";;
  selectTitan.style.borderBottom = "thick solid #ffffff";;
}

var crewTitle = document.getElementById("crewTitle");
var crewProfession = document.getElementById("crewProfession");
var crewParagraph = document.getElementById("crewParagraph");;
var crewImg = document.getElementById("crewImg");
var crewSelect1 = document.getElementById("crewSelect1")
var crewSelect2 = document.getElementById("crewSelect2")
var crewSelect3 = document.getElementById("crewSelect3")
var crewSelect4 = document.getElementById("crewSelect4")


function crewBtn1() {
  crewTitle.textContent = "Douglas Hurley"
  crewProfession.textContent = "Commander "
  crewParagraph.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  crewImg.src = "/assets/crew/image-douglas-hurley.png"
  crewSelect1.style.opacity = "1";
  crewSelect2.style.opacity = "0.17";
  crewSelect3.style.opacity = "0.17";
  crewSelect4.style.opacity = "0.17";
}

function crewBtn2() {
  crewTitle.textContent = "MARK SHUTTLEWORTH"
  crewProfession.textContent = "Mission Specialist "
  crewParagraph.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  crewImg.src = "/assets/crew/image-mark-shuttleworth.png"
  crewSelect1.style.opacity = "0.17";
  crewSelect2.style.opacity = "1";
  crewSelect3.style.opacity = "0.17";
  crewSelect4.style.opacity = "0.17";
}

function crewBtn3() {
  crewTitle.textContent = "Victor Glover"
  crewProfession.textContent = "PILOT"
  crewParagraph.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
  crewImg.src = "/assets/crew/image-victor-glover.png"
  crewSelect1.style.opacity = "0.17";
  crewSelect2.style.opacity = "0.17";
  crewSelect3.style.opacity = "1";
  crewSelect4.style.opacity = "0.17";
}

function crewBtn4() {
  crewTitle.textContent = "Anousheh Ansari"
  crewProfession.textContent = "Flight Engineer"
  crewParagraph.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
  crewImg.src = "/assets/crew/image-anousheh-ansari.png"
  crewSelect1.style.opacity = "0.17";
  crewSelect2.style.opacity = "0.17";
  crewSelect3.style.opacity = "0.17";
  crewSelect4.style.opacity = "1";
}