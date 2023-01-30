jQuery(document).ready(function($)
{
  let isSearch = $("#herramientasContainer").attr('data-search');

  if(isSearch == 'true')
  {
    $("html").animate
    (
      {
        scrollTop: $("#herramientasContainer").offset().top
      },
      800 //speed
    );
  }

  $('.modal-herramientas').modal(
  {
      backdrop: true,
      keyboard: false
  });

  $('.modal-herramientas').on('hidden.bs.modal', function (e)
  {
    $('#' + e.target.id).find('.container-vista-inmersiva-multimedia').each(function(i, obj)
    {
      var memory = $(this).html();
      $(this).html(memory);      
    });
  });

    document.getElementById('searchFormHerramientas').addEventListener( 'submit', function( e )
    {
        let msg =  $('#searchHerramientas').val();

        if(msg.length < 3)
        {
            e.preventDefault();

            if($('.alert-search').data("visible") != true)
            {
                $('.alert-search').show();
                $('.alert-search').data("visible", true);

                setTimeout(hide_alert_search, 3000);
            }
        }
    }, false );

    $('#searchHerramientas').on('input',function(e)
    {
        let msg = $(this).val();

        if(msg.length >= 3)
        {
            $('.alert-search').data("visible", false);
            $('.alert-search').hide();
        }
    });

    function hide_alert_search()
    {
        $('.alert-search').hide();

        $('.alert-search').data("visible", false);
    }

});