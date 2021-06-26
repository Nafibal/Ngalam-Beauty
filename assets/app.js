const dotContainer = document.querySelector(".dot-container");
const toggleNavBtn = document.querySelector(".toggleNav");
const closeNavBtn = document.querySelector(".closeNav");
const navList = document.querySelector(".nav-list");

// Toggle Navigation
toggleNavBtn.addEventListener("click", () => {});

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
