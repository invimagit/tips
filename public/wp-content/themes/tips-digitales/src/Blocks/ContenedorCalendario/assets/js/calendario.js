jQuery(document).ready(function($)
{
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl,
  {
      initialView: 'dayGridMonth',
      selectable: true,
      locales: 'es',
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
      events:
      [
        {
          start: '2023-01-25T10:00:00',
          end: '2023-01-25T16:00:00',
          display: 'background',
          backgroundColor: '#ff9f89'
        },
        {
          start: '2023-01-25T17:00:00',
          end: '2023-01-25T23:00:00',
          display: 'background',
          backgroundColor: '#ff9f89'
        },
      ],
      selectOverlap: function(event)
      {
        console.log("Eventos");
          // Here you will get all background events which are on same time.
          console.log(event);
          return event.rendering === 'background';
      },

      eventClick: function (info) {
        console.log(info);
          $('#modalEvents').modal('show');
      },
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
    $('#modalEvents').modal('hide')
}