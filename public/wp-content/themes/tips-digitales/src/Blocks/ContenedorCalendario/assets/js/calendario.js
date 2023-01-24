jQuery(document).ready(function($)
{
  var calendarEl = document.getElementById('calendar');
  var all_events = [];
  var charged_events_month = [];

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
      datesSet: function(view,element)
      {
          var now = new Date();
          var endNext = new Date();
          var endPrev = new Date();

          endNext.setMonth(now.getMonth() + 3);
          endPrev.setMonth(now.getMonth() - 3);

          if ( endNext < view.end)
          {
              $("#calendar .fc-next-button").css('opacity', '0.25');
              $("#calendar .fc-next-button").prop("disabled", true);

              return false;
          }
          else
          {
              $("#calendar .fc-next-button").css('opacity', '1');
              $("#calendar .fc-next-button").prop("disabled", false);

          }

          if ( view.start < endPrev)
          {
              $("#calendar .fc-prev-button").css('opacity', '0.25');
              $("#calendar .fc-prev-button").prop("disabled", true);

              return false;
          }
          else
          {
              $("#calendar .fc-prev-button").css('opacity', '1');
              $("#calendar .fc-prev-button").prop("disabled", false);

          }
      },
      events: function(date, timezone, callback)
      {
        if(charged_events_month[date.startStr] != true)
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
              end: date.endStr,
              taxonomies: JSON.stringify($('#calendar').data("filters"))
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
                    charged_events_month[date.startStr] = true;

                    calendar.addEvent(
                    {
                      id: evento.ID,
                      start: evento.fechaCalendario,
                      end: evento.fechaCalendario,
                      display: 'background',
                      className: "selected-event",
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
        }
      },
      loading: function( isLoading )
      {
        if (isLoading == true)
        {
        }
        else
        {
        }
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