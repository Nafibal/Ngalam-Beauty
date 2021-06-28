const dotContainer = document.querySelector(".dot-container");
const toggleNavBtn = document.querySelector(".toggleNav");
const closeNavBtn = document.querySelector(".closeNav");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll("nav-link");

// Toggle Navigation
toggleNavBtn.addEventListener("click", () => {
  navList.classList.add("toggle");
});
navList.addEventListener("click", (e) => {
  let target = e.target;
  console.log(e.target.classList.contains("nav-link"));
  if (
    target.classList.contains("nav-link") ||
    target.classList.contains("closeNav")
  ) {
    navList.classList.remove("toggle");
  }
});

$(".slider").slick({
  accessibility: true,
  adaptiveHeight: true,
  arrows: true,
  dots: true,
  appendDots: dotContainer,
  appendArrows: dotContainer,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  infinite: true,
  mobileFirst: true,
});
