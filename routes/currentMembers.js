function scrollAppear() {
  var introText = document.querySelector(".isabella-about-text");
  var introPosition = introText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.3;

  if (introPosition < screenPosition) {
    introText.classList.add("isabella-intro-appear");
  }
}

const julienImage = document.querySelector(".julien-image");
const julienModal = document.querySelector(".julien-modal");
const julienModalClose = document.querySelector(".julien-modal-close");

julienImage.addEventListener("click", function () {
  julienModal.classList.add("julien-modal-active");
});

julienModalClose.addEventListener("click", function () {
  julienModal.classList.remove("julien-modal-active");
});

const nicoleImage = document.querySelector(".nicole-image");
const nicoleModal = document.querySelector(".nicole-modal");
const nicoleModalClose = document.querySelector(".nicole-modal-close");

nicoleImage.addEventListener("click", function () {
  nicoleModal.classList.add("nicole-modal-active");
});

nicoleModalClose.addEventListener("click", function () {
  nicoleModal.classList.remove("nicole-modal-active");
});

const fredImage = document.querySelector(".fred-image");
const fredModal = document.querySelector(".fred-modal");
const fredModalClose = document.querySelector(".fred-modal-close");

fredImage.addEventListener("click", function () {
  fredModal.classList.add("fred-modal-active");
});

fredModalClose.addEventListener("click", function () {
  fredModal.classList.remove("fred-modal-active");
});

const sruthiImage = document.querySelector(".sruthi-image");
const sruthiModal = document.querySelector(".sruthi-modal");
const sruthiModalClose = document.querySelector(".sruthi-modal-close");

sruthiImage.addEventListener("click", function () {
  sruthiModal.classList.add("sruthi-modal-active");
});

sruthiModalClose.addEventListener("click", function () {
  sruthiModal.classList.remove("sruthi-modal-active");
});

const mohamedImage = document.querySelector(".mohamed-image");
const mohamedModal = document.querySelector(".mohamed-modal");
const mohamedModalClose = document.querySelector(".mohamed-modal-close");

mohamedImage.addEventListener("click", function () {
  mohamedModal.classList.add("mohamed-modal-active");
});

mohamedModalClose.addEventListener("click", function () {
  mohamedModal.classList.remove("mohamed-modal-active");
});

const ivanImage = document.querySelector(".ivan-image");
const ivanModal = document.querySelector(".ivan-modal");
const ivanModalClose = document.querySelector(".ivan-modal-close");

ivanImage.addEventListener("click", function () {
  ivanModal.classList.add("ivan-modal-active");
});

ivanModalClose.addEventListener("click", function () {
  ivanModal.classList.remove("ivan-modal-active");
});
