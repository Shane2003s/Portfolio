

//const navToggle= document.querySelector("#navToggle");
//const nav=document.querySelector("nav");
//const navIcon=document.querySelectorAll(".nacIcon")
//const hiddenIcon=document.querySelector(".hidden")

//navToggle.addEventListener("click", () => {
//    nav.classList.toggle("open");   
//});






//Important
const burger=document.querySelector('.burger');
const navlinks=document.querySelector('.navlinks');
const myphoto=document.querySelector('.myphoto')
burger.addEventListener("click",() => {
    navlinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
    myphoto.classList.toggle("none");
});
const submit=document.querySelector(".submit");
submit.addEventListener("click",() => {
    alert("Can't work,currently this item is under maintainace.")
});


const delayInMilliseconds = 1000;
setTimeout(function() {
  
  }, delayInMilliseconds);
