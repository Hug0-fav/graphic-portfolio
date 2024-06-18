const container = document.querySelector(".container");
const catergory = document.querySelectorAll(".Category");

const catergoryOne = document.querySelector(".catergore__one");
const catergoryTwo = document.querySelector(".catergore__two");
const catergoryThree = document.querySelector(".catergore__three");
const bookOne = document.querySelector(".booking__container");
const bookTwo = document.querySelector(".booking__container__two");
const bookThree = document.querySelector(".booking__container__three");

const serviceBtn = document.querySelectorAll(".service__btn");
const bookingResult = document.querySelector(".booking__result");
const closeResult = document.querySelector(".close__result");

catergory.forEach((catergoryEl) => {
  catergoryEl.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    catergoryEl.classList.add("active");
  });
});

catergoryTwo.addEventListener("click", function () {
  console.log("clicked");
  bookTwo.style.display = "flex";
  bookOne.style.display = "none";
  bookThree.style.display = "none";
});

catergoryOne.addEventListener("click", function () {
  console.log("clicked");
  bookOne.style.display = "flex";
  bookTwo.style.display = "none";
  bookThree.style.display = "none";
});

catergoryThree.addEventListener("click", function () {
  console.log("clicked");
  bookTwo.style.display = "none";
  bookOne.style.display = "none";
  bookThree.style.display = "flex";
});

serviceBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    bookingResult.style.display = "block";
    container.style.filter = "blur(5px)";
  });
});

closeResult.addEventListener("click", function() {
  bookingResult.style.display = "none";
  container.style.filter = "none";
});
