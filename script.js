const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("navtoggle");

navToggle.addEventListener("click", function () {
navMenu.classList.toggle("show-menu");
navToggle.classList.toggle("show-icon");
});

var ScrollTopBtn = document.getElementById("arrow-up");

  window.onscroll = function() {
    // إذا نزل المستخدم 100 بكسل من أعلى الصفحة يظهر الزر
    if ( document.documentElement.scrollTop > 100) {
      ScrollTopBtn.style.display = "block"; 
    } else {
      ScrollTopBtn.style.display = "none"; 
    }
  };

  window.addEventListener('scroll' , function(){
    const section = document.querySelector('.section-animate');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
  
    if (sectionPosition < screenPosition) {
      section.classList.add('show-animate');
    } else {
      section.classList.remove('show-animate');
    }
  });
