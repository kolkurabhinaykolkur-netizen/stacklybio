const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.getElementById("closeMenu");


// OPEN MENU
hamburger.addEventListener("click", () => {
navLinks.classList.add("active");
});


// CLOSE MENU
closeMenu.addEventListener("click", () => {
navLinks.classList.remove("active");
});




// SCROLL ANIMATION

const scrollElements = document.querySelectorAll(".scroll");

function revealOnScroll(){

scrollElements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(elementTop < windowHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



const elements = document.querySelectorAll(".scroll-left, .scroll-up");

function reveal(){

elements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(elementTop < windowHeight - 100){
el.classList.add("show");
}

});

}

window.addEventListener("scroll", reveal);
reveal();




const items = document.querySelectorAll(".industry-item");
const images = document.querySelectorAll(".industry-image img");

items.forEach(item => {

item.addEventListener("click", () => {

items.forEach(i => i.classList.remove("active"));
item.classList.add("active");

const imgID = item.getAttribute("data-img");

images.forEach(img => img.classList.remove("active"));

document.getElementById(imgID).classList.add("active");

});

});









const projectElements = document.querySelectorAll(".project-scroll");

function revealProjects(){

projectElements.forEach((el,index)=>{

const elementTop = el.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(elementTop < windowHeight - 100){

setTimeout(()=>{
el.classList.add("project-show");
}, index * 150);

}

});

}

window.addEventListener("scroll", revealProjects);

revealProjects();



const bioLines = document.querySelectorAll(".bio-line");

window.addEventListener("scroll", () => {

bioLines.forEach((line,index)=>{

const elementTop = line.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(elementTop < screenHeight - 100){

setTimeout(()=>{

line.classList.add("bio-show");

}, index * 400);   // delay for one-by-one animation

}

});

});
const insightCards = document.querySelectorAll(".insight-scroll");

function revealInsights(){

insightCards.forEach((card,index)=>{

const elementTop = card.getBoundingClientRect().top;
const windowHeight = window.innerHeight;

if(elementTop < windowHeight - 100){

setTimeout(()=>{

card.classList.add("show");

}, index * 200);

}

});

}

window.addEventListener("scroll", revealInsights);

revealInsights();









const ctaSection = document.querySelector(".scroll-cta");

function revealCTA(){

const elementTop = ctaSection.getBoundingClientRect().top;
const screenHeight = window.innerHeight;

if(elementTop < screenHeight - 100){

ctaSection.classList.add("show");

}

}

window.addEventListener("scroll", revealCTA);
revealCTA();








