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
          title: 'my event',
          start: '2018-09-01',
          backgroundColor: '#000000'
        }
      ]

      eventClick: function (info) {
          $('#modalEvents').modal('show')
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