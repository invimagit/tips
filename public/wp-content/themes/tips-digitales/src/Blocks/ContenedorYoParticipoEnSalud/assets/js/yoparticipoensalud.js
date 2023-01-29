jQuery(document).ready(function($)
{
  let rows = $('.yoparticipoensalud-carousel').attr("data-row");
  let cols = $('.yoparticipoensalud-carousel').attr("data-col");

  $('.modal-yoparticipo').modal(
  {
      backdrop: true,
      keyboard: false
  });

  $('.modal-yoparticipo').on('hidden.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.container-vista-inmersiva-multimedia').each(function(i, obj)
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
  });

  $('.modal-yoparticipo').on('shown.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.yoparticipoensalud-carousel-inmersivo').slick(
    {
      rows: 1,
      autoplay: false,
      dots: false,
      lazyLoad: 'ondemand',
      arrows: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });

  $('.yoparticipoensalud-carousel-inmersivo').on('beforeChange', function(event, slick, currentSlide, nextSlide)
  {    
    $('.container-vista-inmersiva-multimedia').each(function()
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
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