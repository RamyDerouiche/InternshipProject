import React from 'react';
import Scheduler from '@bitnoi.se/react-scheduler';
import '@bitnoi.se/react-scheduler/dist/style.css'; // Add this line if required

function Calendar() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Calendrier des tâches</h2>
      <Scheduler />
    </div>
  );
}
export default Calendar;