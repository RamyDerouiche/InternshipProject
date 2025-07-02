import React from 'react';
import Sidebar from '../components/Dashboard/Sidebar';
import Header from '../components/Dashboard/Header';
import KpiCard from '../components/Dashboard/KpiCard';
import TaskTable from '../components/Dashboard/TaskTable';
import CalendarWidget from '../components/Dashboard/CalendarWidget';
import './Dashboard.css';

const sampleTasks = [
  { name: 'Design meeting', assignee: 'Alice', due: '2025-07-05' },
  { name: 'Code review', assignee: 'Bob', due: '2025-07-07' },
  { name: 'Deploy release', assignee: 'Charlie', due: '2025-07-09' },
];

function Dashboard() {
  return (
    <div className="dashboard d-flex">
      <Sidebar />
      <main>
        <Header userName="Ramy" />
        <p className="welcome-message mb-4">Welcome to your dashboard!</p>
        <div className="row mb-4">
          <div className="col-md-4">
            <KpiCard title="Tasks Completed" value="15" variant="success" />
          </div>
          <div className="col-md-4">
            <KpiCard title="Hours Worked" value="40" variant="info" />
          </div>
          <div className="col-md-4">
            <KpiCard title="Open Issues" value="3" variant="warning" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h5 className="mb-3">Upcoming Tasks</h5>
            <TaskTable tasks={sampleTasks} />
          </div>
          <div className="col-lg-6 mb-4">
            <h5 className="mb-3">Calendar</h5>
            <CalendarWidget />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h5 className="mb-3">Productivity</h5>
            <div className="graph-placeholder">Graph coming soon</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
