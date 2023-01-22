jQuery(document).ready(function($)
{
  var calendarEl = document.getElementById('calendar');
  var all_events = [];
  let containerClone = $('.events-container').clone().addClass('eventClone');

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
      viewRender: function(view,element)
      {
          var now = new Date();
          var end = new Date();
          end.setMonth(now.getMonth() + 3); //Adjust as needed

          if ( end < view.end) {
              $("#calendar .fc-next-button").hide();
              return false;
          }
          else {
              $("#calendar .fc-next-button").show();
          }

          if ( view.start < now) {
              $("#calendar .fc-prev-button").hide();
              return false;
          }
          else {
              $("#calendar .fc-prev-button").show();
          }
      },
      events: function(date, timezone, callback)
      {
        jQuery.ajax(
        {
          url: ajaxURL,
          type: 'POST',
          dataType: 'json',
          data: 
          {
            action: 'ajax_calendar_events',
            start: date.startStr,
            end: date.endStr
          },
          success: function(data) 
          {
            var events = [];
            if (data != null)
            {
              if(data.type == 'success')
              {
                data.result.forEach(function(evento, index)
                {
                  all_events[evento.ID] = evento;

                  calendar.addEvent(
                  {
                    id: evento.ID,
                    start: evento.fechaCalendario,
                    end: evento.fechaCalendario,
                    display: 'background',
                  });
                });
              }
            }

            $('.modal-body-calendario').find(".eventClone").remove();
            callback(events);
          },
          error: function (response)
          {
            console.log(response);
          },
          fail: function (response)
          {
            console.log(response);
          }
        });
      },
      dateClick: function (info)
      {
        let hasEvent = false;
        let contEventsSameDay = 0;
        let clone;
        
        $('.modal-body-calendario').find(".eventClone").remove();

        all_events.forEach(function(evento, i)
        {
          if(info.dateStr == all_events[i].fechaCalendario)
          {
            if(contEventsSameDay >= 1)
            {
              let containerEvents = containerClone;

              containerEvents.find('.modal-title-calendario').last().html(all_events[i].titulo);
              containerEvents.find('.modal-descripcion-calendario').last().html(all_events[i].descripcion);
              containerEvents.find('.modal-direccion-calendario').last().html(all_events[i].direccion);
              containerEvents.find('.modal-fecha-calendario').last().html(all_events[i].fechaMostrar);

              $('.modal-body-calendario').append(containerEvents);
            }
            else
            {
              $('.modal-title-calendario').html(all_events[i].titulo);
              $('.modal-descripcion-calendario').html(all_events[i].descripcion);
              $('.modal-direccion-calendario').html(all_events[i].direccion);
              $('.modal-fecha-calendario').html(all_events[i].fechaMostrar);
            }

            hasEvent = true;
            contEventsSameDay++;
          }

        });

        if(hasEvent)
          $('#modalEvents').modal('show');
      }
  });

  calendar.render();

});