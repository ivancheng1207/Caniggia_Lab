//Slider Code
let slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function scrollAppear() {
  var introText = document.querySelector(".isabella-about-text");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    introText.classList.add("isabella-intro-appear");
  }
}

var julienImage = document.querySelector(".julien-image");
var julienModal = document.querySelector(".julien-modal");

julienImage.addEventListener("click", function () {
  console.log("hello");
  julienModal.classList.add("julien-modal-active");
});
