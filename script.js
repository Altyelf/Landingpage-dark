const links = document.querySelectorAll ("a");

links.forEach(link=>link.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top:offsetTop-100,
        behavior: "smooth"
    });
}

const mybutton = document.getElementById("myBtn");

window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({top:0, behavior: "smooth"});
}

const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger(){
    nav.classList.toggle("showNav");
    hamburger.classList.toggle("showClose");
  };

  var menu = document.querySelectorAll(".menu");

  menu.forEach( 
    function(menu) { 
      menu.addEventListener("click", toggleHamburger) 
    }
  )