import React, { useState } from 'react';
import Widget from './Widget';
import Sidebar from './Sidebar'; // Importing the Sidebar component
import './Dashboard.css';

const Dashboard = () => {
  const [widgets, setWidgets] = useState(['Performance', 'Leads Summary']);

  const addWidget = () => {
    setWidgets([...widgets, 'New Widget']);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard">
        <h1>Dashboard</h1>
        <button onClick={addWidget}>Add Widget</button>
        <div className="widgets">
          {widgets.map((widget, index) => (
            <Widget key={index} title={widget} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
