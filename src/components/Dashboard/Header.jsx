import React from 'react';

function Header({ userName = 'User' }) {
  return (
    <div className="dashboard-header d-flex justify-content-between align-items-center mb-4">
      <div>
        <h2 className="h5 mb-1">Hello, {userName}</h2>
        <p className="text-muted m-0">Welcome back!</p>
      </div>
      <img
        src={`${import.meta.env.BASE_URL}/img/person/person-m-1.webp`}
        alt="avatar"
        width="40"
        height="40"
        className="rounded-circle"
      />
    </div>
  );
}

export default Header;