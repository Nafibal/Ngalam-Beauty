const prevArrowBtn = document.querySelector(".slick-prev");
const nextArrowBtn = document.querySelector(".slick-next");

console.log(prevArrowBtn);

$(".slider").slick({
  accessibility: true,
  adaptiveHeight: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
  arrows: true,
  dots: true,
  infinite: true,
  mobileFirst: true,
});
