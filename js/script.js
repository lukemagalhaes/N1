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

var destinationTitle = document.getElementById("destinationTitle");
var destinationParagraph = document.getElementById("destinationParagraph");
var destinationDistance = document.getElementById("destinationDistance");
var destinationDays = document.getElementById("destinationDays");
var destinationImg = document.getElementById("destinationImg");

function destinationMoon() {
  destinationTitle.textContent = "MOON";
  destinationParagraph.textContent = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  destinationDistance.textContent = "384,400 km";
  destinationDays.textContent = "3 days"
  destinationImg.src = "/assets/destination/image-moon.png"
}

function destinationMars() {
  destinationTitle.textContent = "MARS";
  destinationParagraph.textContent = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  destinationDistance.textContent = "225 MIL. km";
  destinationDays.textContent = "9 months"
  destinationImg.src = "/assets/destination/image-mars.png"
}

function destinationEuropa(){
  destinationTitle.textContent = "EUROPA";
  destinationParagraph.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  destinationDistance.textContent = "628 MIL. km";
  destinationDays.textContent = "3 years"
  destinationImg.src = "/assets/destination/image-europa.png"
}

function destinationTitan() {
  destinationTitle.textContent = "TITAN";
  destinationParagraph.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  destinationDistance.textContent = "1.6 BIL. km";
  destinationDays.textContent = "7 years"
  destinationImg.src = "/assets/destination/image-titan.png"
}

var crewTitle = document.getElementById("crewTitle");
var crewProfession = document.getElementById("crewProfession");
var crewParagraph = document.getElementById("crewParagraph");;
var crewImg = document.getElementById("crewImg");


function crewBtn1() {
  crewTitle.textContent = "Douglas Hurley"
  crewProfession.textContent = "Commander "
  crewParagraph.textContent = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
  crewImg.src = "/assets/crew/image-douglas-hurley.png"
}

function crewBtn2() {
  crewTitle.textContent = "MARK SHUTTLEWORTH"
  crewProfession.textContent = "Mission Specialist "
  crewParagraph.textContent = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  crewImg.src = "/assets/crew/image-mark-shuttleworth.png"
}

function crewBtn3() {
  crewTitle.textContent = "Victor Glover"
  crewProfession.textContent = "PILOT"
  crewParagraph.textContent = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
  crewImg.src = "/assets/crew/image-victor-glover.png"
}

function crewBtn4() {
  crewTitle.textContent = "Anousheh Ansari"
  crewProfession.textContent = "Flight Engineer"
  crewParagraph.textContent = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
  crewImg.src = "/assets/crew/image-anousheh-ansari.png"
}