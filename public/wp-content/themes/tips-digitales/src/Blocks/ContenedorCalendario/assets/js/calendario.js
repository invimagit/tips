jQuery(document).ready(function($)
{
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl,
    {
        initialView: 'dayGridMonth',
        selectable: false,
        locales: 'es',
        fixedWeekCount: false,
        headerToolbar:
        {
            left: 'prev',
            center: 'title',
            right: 'next',
        },
        titleFormat:
        {
            year: 'numeric',
            month: 'short',
        },
        events: [
        {
          start: '2023-01-12',
          end: '2023-01-12',
          overlap: true,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2023-01-15',
          end: '2023-01-15',
          overlap: true,
          display: 'background',
          color: '#ff9f89'
        },
        {
          start: '2023-01-18',
          end: '2023-01-18',
          overlap: true,
          display: 'background',
          color: '#ff9f89'
        }],
        eventClick: function (info)
        {
            jQuery('#modalEvents').modal('show')
        },
    });
/*
    calendar.addEvent(
    {
        title: 'Second Event',
        start: '2023-01-05',
        end: '2023-01-05'
    });
*/
    calendar.render();
});

function closeModal()
{
    jQuery('#modalEvents').modal('hide')
}