/*----------scroll----------*/
$(function() {
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});
/*----------scroll----------*/


/*----------logic----------*/
$(".burger").on("click", function(event) {
    $(".burger").toggleClass("active");
    $(".burger__nav").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".burger_nav__link").on("click", function(event) {
    $(".burger").removeClass("active");
    $(".burger__nav").removeClass("active");
    $("body").removeClass("lock");
});

$(".shop__box").on("click", function(event) {
    $(".shopping__cart").toggleClass("active");
    $("body").toggleClass("lock");
});

$(".logo").on("click", function(event) {
    $(".shopping__cart").removeClass("active");
    $("body").removeClass("lock");
});
/*----------logic----------*/


/*----------slider----------*/
$('.about__slider').slick({
  dots: false,
  arrows : false,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true
})

$('.coctails__slider').slick({
  dots: false,
  arrows : false,
  speed: 300,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  variableWidth: true
})
/*----------slider----------*/


$('a').click(function () {});
$("a").removeAttr("href");


/*----------amination----------*/
function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('anim-show');
    }
    else {
        change.target.classList.remove('anim-show');
    }
    });
    }
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.anim');

    for (let elm of elements) {
      observer.observe(elm);
    }
    });
/*----------amination----------*/


