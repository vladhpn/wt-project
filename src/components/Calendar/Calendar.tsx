import { DateSelectArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import { useState } from 'react';

export const Calendar = () => {
  const [myEvents, setMyEvants] = useState([]);

  const handleDateClick = (selected: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.startStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected: {
    event: { title: any; remove: () => void };
  }) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`,
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div>
      <div>
        <h3>Calendar Full Calendar Interactive Page</h3>
      </div>

      {/* CALENDAR SIDEBAR */}
      <div className="flex flex-row">
        <div className="w-1/5 mr-4">
          <h4>Events</h4>
          <ul>
            <li>
              <p>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit quis laboriosam non debitis? Quibusdam dolorem,
                  soluta nisi ratione ullam voluptas perferendis doloribus eum
                  quos vel optio adipisci, cupiditate modi reiciendis. Earum
                  fugiat possimus sequi recusandae quia? Est voluptates alias
                  beatae optio facilis hic error! Quo aliquam aliquid, eius
                  voluptas animi qui doloribus totam nobis voluptate provident
                  consequuntur, libero ab. Dicta. Repellat, quod reprehenderit.
                  Minus, vitae. Beatae et, dolorum, iste impedit illo quos
                  accusamus dolorem unde voluptates quo molestiae aliquid
                  temporibus fugit, eveniet perspiciatis dolor sunt eaque.
                  Perspiciatis id sunt obcaecati. Placeat, quidem consequatur!
                  Nihil illum officiis perferendis hic animi maxime similique
                  alias, porro cupiditate voluptate expedita quidem temporibus
                  sit ipsum dolorum, consectetur, modi quos sequi? Eligendi in
                  doloribus sint incidunt! Eum animi corrupti esse? Eveniet
                  reprehenderit, voluptas repudiandae omnis et libero quasi,
                  vitae quae illum possimus, porro eaque earum a? Provident,
                  autem. Velit sed alias nostrum nulla nesciunt, repellat
                  dolore.
                </span>
              </p>
            </li>
          </ul>
        </div>

        <div className="w-4/5">
          <FullCalendar
            height="80vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            initialEvents={[
              {
                id: '12315',
                title: 'All-day event',
                date: '2023-04-20T14:00:00+01:00',
              },
              {
                id: '5123',
                title: 'Timed event',
                date: '2023-04-28T20:00:00+01:00',
                endDate: '2023-04-20T14:30:00+01:00',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
