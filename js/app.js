const navigation = document.querySelector('.navigation');
const showNav = document.querySelector(".mobile__nav");
const showNavDark = document.querySelector(".mobile__nav__dark");
const closeNav = document.querySelector(".mobile__nav__close");
const navbar = document.querySelector("header");
const navLinks = navigation.querySelectorAll("li");
const sticky = navbar.offsetTop;
console.log(sticky);
const closeMobileMenu = () => navigation.classList.remove('is-active');
const showMobileMenu = () => navigation.classList.add('is-active');

const changeColorNav = () =>{
    if (window.scrollY >= 300) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}
navLinks.forEach((el) => el.addEventListener('click', closeMobileMenu))
window.addEventListener('scroll', changeColorNav)
closeNav.addEventListener('click', closeMobileMenu)
showNav.addEventListener('click', showMobileMenu)
showNavDark.addEventListener('click', showMobileMenu)

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
} 

// karuzela

const slidesRecommend = document.querySelector(".slides");
        let index = 0;
        let slideWidth = document.querySelector(".slide").offsetWidth + 10;
        if (window.innerWidth <= 768) {
          slideWidth = document.querySelector(".slide").offsetWidth;
        }

        const totalSlides = document.querySelectorAll(".slide").length;

        function cloneSlides() {
            const firstSlides = slidesRecommend.innerHTML;
            slidesRecommend.innerHTML += firstSlides; // Duplikujemy slajdy dla płynnego przejścia
        }

        function nextSlide() {
            index++;
            slidesRecommend.style.transition = "transform 0.5s ease-in-out";
            slidesRecommend.style.transform = `translateX(-${index * slideWidth}px)`;
            
            if (index === totalSlides) {
                setTimeout(() => {
                  slidesRecommend.style.transition = "none";
                  slidesRecommend.style.transform = "translateX(0)";
                    index = 0;
                }, 500);
            }
        }

        cloneSlides();
        setInterval(nextSlide, 3000);

        window.addEventListener("scroll", function() {
          let scrollButton = document.getElementById("scrollToTop");
          let scrollPosition = window.scrollY || document.documentElement.scrollTop;
          let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          
          if (scrollPosition > pageHeight / 3) {
              scrollButton.style.display = "block";
          } else {
              scrollButton.style.display = "none";
          }
      });

      function scrollToTop() {
          window.scrollTo({ top: 0, behavior: "smooth" });
      }