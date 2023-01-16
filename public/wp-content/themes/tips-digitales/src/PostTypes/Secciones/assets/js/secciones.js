jQuery(document).ready(function($)
{
	$('.modalDependencias').modal(
	{
	    backdrop: true,
	    keyboard: false
	});

  $('.multi-item-carousel').slick(
  {
    rows: 2,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive:
    [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

	$('.modalDependencias').on('shown.bs.modal', function()
	{
 		$(this).find('.multi-item-carousel').css('opacity', 1);
 		$(this).find('.multi-item-carousel').slick('setPosition');
    $(this).find('.multi-item-carousel').slick('slickGoTo', 1);
  });

	$('.modalDependencias').on('hiden.bs.modal', function()
	{
		$(this).find('.multi-item-carousel').css('opacity', 0);
  });

  $(".timeline-carousel").slick(
  {
    centerMode: true,
    dots: false,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: ".timeline-carousel-info"
  });

  $(".timeline-carousel-info").slick(
  {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: ".timeline-carousel"
  });

  $(".timeline-carousel").slick('setPosition');
  $(".timeline-carousel").slick('slickGoTo', 1);

  $('.timeline-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide)
  {
    console.log(nextSlide, currentSlide);
    if (nextSlide === 0 || currentSlide === 0)
    {
      $(this).slick('slickPause');
    };
  });
});