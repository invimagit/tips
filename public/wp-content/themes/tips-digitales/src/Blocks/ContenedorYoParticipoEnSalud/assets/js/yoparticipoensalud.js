jQuery(document).ready(function($)
{
  let rows = $('.yoparticipoensalud-carousel').attr("data-row");
  let cols = $('.yoparticipoensalud-carousel').attr("data-col");

  $('.modal-yoparticipo').modal(
  {
      backdrop: true,
      keyboard: false
  });

  $('.yoparticipoensalud-carousel-inmersivo').slick(
  {
    rows: 1,
    autoplay: false,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  $('.yoparticipoensalud-carousel').slick(
  {
    rows: parseInt(rows),
    autoplay: false,
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: parseInt(cols),
    slidesToScroll: parseInt(cols),
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
});