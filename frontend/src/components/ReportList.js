import React from 'react';


function ReportList({ count = 1, reports, onEdit }) {
  return (
    <div>
      <h2>Stray Dog Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <strong>ID: </strong> {count++} <strong>Location:</strong> {report.location}  -  <strong>Details: </strong> {report.description}
            <button onClick={() => onEdit(report.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReportList;
