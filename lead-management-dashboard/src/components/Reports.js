import React from 'react';
import jsPDF from 'jspdf';
import { CSVLink } from 'react-csv';
import './reports.css';

const Reports = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text('Report Content', 10, 10);
    doc.save('report.pdf');
  };

  const csvData = [
    ["Lead ID", "Name", "Email"],
    [1, "Lead 1", "lead1@example.com"],
    [2, "Lead 2", "lead2@example.com"],
  ];

  return (
    <div className="reports">
      <h1>Reports</h1>
      <button onClick={generatePDF}>Generate PDF</button>
      <CSVLink data={csvData} className="csv-link">Download CSV</CSVLink>
    </div>
  );
};

export default Reports;
