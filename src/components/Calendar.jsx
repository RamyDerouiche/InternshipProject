import React from 'react';
import Scheduler from './node_modules/@bitnoi.se/react-scheduler/scheduler/index.js';

function Calendar() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Calendrier des tâches</h2>
      <Scheduler />
    </div>
  );
}
export default Calendar;