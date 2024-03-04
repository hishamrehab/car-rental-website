const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let myImage = document.getElementById("slideshow");
let Images = [
  "cars_images/02.jpg",
  "cars_images/03 (1).jpg",
  "cars_images/03.jpg",
  "cars_images/04 (1).jpg ",
  "cars_images/04.jpg",
  "cars_images/05.jpg",
  "cars_images/7.jpg ",
  "cars_images/8.jpg ",
  "cars_images/9.jpg",

  "cars_images/13.jpg",
  "cars_images/14.jpg",
  "cars_images/15.jpg",
  "cars_images/11.jpg",

];
let i = 0;

function slideshow() {
  myImage.setAttribute("src", Images[i]);

  if (i == Images.length - 1) {
    i = 0;
  } else {
    i++;
  }

  setTimeout(function () {
    slideshow();
  }, 1500);
}
slideshow();

// Swiper
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
      .querySelector(".prepend-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
      });
    document
      .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
      });
    document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
      });
