var $counter = $('.slide-count');
var $slider = $('.slider');

$slider.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $counter.text(i + '/' + slick.slideCount);
});

$slider.slick({
  infinite: true,
	dots: false,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	fadeSpeed: 1000
});