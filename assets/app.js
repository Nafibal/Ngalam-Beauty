const dotContainer = document.querySelector(".dot-container");

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
