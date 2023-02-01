jQuery(document).ready(function($)
{

  $('#inputFiltroLocalidad').tagify(
  {
    enforceWhitelist: true,
    whitelist : JSON.parse($('#inputFiltroLocalidad').attr('data-tags')),
    dropdown : 
    {
      enabled: 0,            // show suggestion after 1 typed character
      fuzzySearch: false,    // match only suggestions that starts with the typed characters
      position: 'text',      // position suggestions list next to typed text
      caseSensitive: false,   // allow adding duplicate items if their case is different
    },
  });

  $('#inputFiltroGrupo').tagify(
  {
    enforceWhitelist: true,
    whitelist : JSON.parse($('#inputFiltroGrupo').attr('data-tags')),
    dropdown : 
    {
      enabled: 0,            // show suggestion after 1 typed character
      fuzzySearch: false,    // match only suggestions that starts with the typed characters
      position: 'text',      // position suggestions list next to typed text
      caseSensitive: false,   // allow adding duplicate items if their case is different
    },
  });

  $('#inputFiltroTematica').tagify(
  {
    enforceWhitelist: true,
    whitelist : JSON.parse($('#inputFiltroTematica').attr('data-tags')),
    dropdown : 
    {
      enabled: 0,            // show suggestion after 1 typed character
      fuzzySearch: false,    // match only suggestions that starts with the typed characters
      position: 'text',      // position suggestions list next to typed text
      caseSensitive: false,   // allow adding duplicate items if their case is different
    },
  });

  // bind the "click" event on the "remove all tags" button
  $('#removeAllTags').on('click', function (e)
  {
    e.preventDefault();

    $('#inputFiltroLocalidad').data('tagify').removeAllTags();
    $('#inputFiltroGrupo').data('tagify').removeAllTags();
    $('#inputFiltroTematica').data('tagify').removeAllTags();
  });
});