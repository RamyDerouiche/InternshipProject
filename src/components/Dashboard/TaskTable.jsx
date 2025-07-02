import React from 'react';

function TaskTable({ tasks }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Task</th>
          <th>Assignee</th>
          <th>Due</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.name}</td>
            <td>{task.assignee}</td>
            <td>{task.due}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;