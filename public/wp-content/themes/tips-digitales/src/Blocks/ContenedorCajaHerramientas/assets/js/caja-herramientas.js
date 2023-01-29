jQuery(document).ready(function($)
{
  let items = $('#herramientasContainer').attr("data-items");
  let urlInitial = $('#herramientasContainer').attr("data-url");

  var container = $('#paginationHerramientas');

  container.pagination(
  {
    dataSource: urlInitial,
    locator: 'posts',
    totalNumber: parseInt(items),

    pageSize: 1,
    showPageNumbers: false,
    showNavigator: true,

    ulClassName: 'pagination',
    pageClassName : 'page-item',
    ajax:
    {
      beforeSend: function()
      {
        container.prev().html('<div class="col-md-12 descripcion-herramientas px-5 py-3">Cargando las herramientas ...</div>');
      }
    },
    callback: function(response, pagination)
    {
      var pageStart = (pagination.pageNumber - 1) * pagination.pageSize;
      var pageEnd = pageStart + pagination.pageSize;
      var pageItems = response.slice(pageStart, pageEnd);
      var dataHtml = '';
      var dataItem = '';
      var dataTipo = '';

      $.each(pageItems, function(index, item)
      {
        dataItem    = '<div class="col-12 col-md-6 mb-4 mt-1 herramientaItem"><div class="d-flex"><span class="iconInfo me-2"></span>';
        dataTipo    = '<h3 class="tipo-herramientas">' + item.taxName +'</h3></div>';
        dataRow     = '<div class="row"><div class="col-12 col-md-8">';
        dataTitle   = '<h3 class="titulo-herramientas px-3">' + item.title + '</h3>';
        dataDesc    = '<div class="descripcion-herramientas px-3">' + item.descripcion + '</div>';
        dataDonwload= '</div><div class="col-12 col-md-4 mt-md-2 mt-4 d-block mx-auto"><div class="download-file">';
        dataImage   = '<img src="' + item.imagen + '" class="img-fluid d-block mx-auto">';
        dataClose   = '</div></div></div></div>';
        
        dataHtml    += dataItem + dataTipo + dataRow + dataTitle + dataDesc + dataDonwload + dataImage + dataClose;
      });                  

      container.prev().html(dataHtml);
    }
  });

  $('#searchFormHerramientas').submit(function(e)
  {
    container.pagination('destroy');
    container.html('');

    e.preventDefault();
    input = $("#searchHerramientas").val();

    container.pagination(
    {
      dataSource: urlInitial + '?keyword=' + input,
      locator: 'posts',
    pageSize: 1,
    showPageNumbers: false,
    showNavigator: true,
      ulClassName: 'pagination',
      pageClassName : 'page-item',
      ajax:
      {
        beforeSend: function()
        {
          container.prev().html('<div class="col-md-12 descripcion-herramientas px-5 py-3">Cargando las herramientas ...</div>');
        }
      },
      callback: function(response, pagination)
      {
        var pageStart = (pagination.pageNumber - 1) * pagination.pageSize;
        var pageEnd = pageStart + pagination.pageSize;
        var pageItems = response.slice(pageStart, pageEnd);
        var dataHtml = '';
        var dataItem = '';
        var dataTipo = '';
        console.log(response.length);
        pagination.totalNumber = response.length;

        $.each(pageItems, function(index, item)
        {
          dataItem    = '<div class="col-12 col-md-6 mb-4 mt-1 herramientaItem"><div class="d-flex"><span class="iconInfo me-2"></span>';
          dataTipo    = '<h3 class="tipo-herramientas">' + item.taxName +'</h3></div>';
          dataRow     = '<div class="row"><div class="col-12 col-md-8">';
          dataTitle   = '<h3 class="titulo-herramientas px-3">' + item.title + '</h3>';
          dataDesc    = '<div class="descripcion-herramientas px-3">' + item.descripcion + '</div>';
          dataDonwload= '</div><div class="col-12 col-md-4 mt-md-2 mt-4 d-block mx-auto"><div class="download-file">';
          dataImage   = '<img src="' + item.imagen + '" class="img-fluid d-block mx-auto">';
          dataClose   = '</div></div></div></div>';
          
          dataHtml    += dataItem + dataTipo + dataRow + dataTitle + dataDesc + dataDonwload + dataImage + dataClose;
        });                  

        container.prev().html(dataHtml);
      }
    });
  });

});