jQuery(document).ready(function($)
{
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl,
  {
      initialView: 'dayGridMonth',
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
      eventClick: function(events)
      {
            console.log(events);
            $('#modalEvents').modal('show');
      },
      events: [
      {
        "start": "2023-01-02",
        "end": "2023-01-02",
        display: 'background',
      },
      {
        "start": "2023-01-24",
        "end": "2023-01-24",
        display: 'background',
      },
      {
        "start": "2023-01-28",
        "end": "2023-01-28",
        display: 'background',
      }],
  });
  calendar.render();

  $("#testbtn").on("click", function () {
      calendar.addEvent({
          title: 'Second Event',
          start: '2020-08-08T12:30:00',
          end: '2020-08-08T13:30:00'
      });
  });
});

function closeModal()
{
    jQuery('#modalEvents').modal('hide')
}