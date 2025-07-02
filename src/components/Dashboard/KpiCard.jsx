import React from 'react';

function KpiCard({ title, value, variant = 'primary' }) {
  return (
    <div className={`kpi-card card text-${variant} mb-3`}>
      <div className="card-body">
        <h6 className="card-title text-muted">{title}</h6>
        <h3 className="card-text">{value}</h3>
      </div>
    </div>
  );
}

export default KpiCard;