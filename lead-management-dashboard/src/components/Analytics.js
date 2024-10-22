import React from 'react';
import { Bar } from 'react-chartjs-2';
import './analytics.css'
import { Chart, registerables } from 'chart.js';

// Register all necessary components
Chart.register(...registerables);


const Analytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Leads Acquired',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="analytics">
      <h1>Analytics</h1>
      <Bar data={data} />
    </div>
  );
};

export default Analytics;
