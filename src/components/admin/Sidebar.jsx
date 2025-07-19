import React from 'react';

function Sidebar() {
  return (
    <>
        {/* Top Navbar */}
        <div className="sidebar p-3 shadow-sm bg-white">
        <h5 className="text-center mb-4 fw-bold">Menu</h5>
        <ul className="nav flex-column gap-3">
          <li className="nav-item">
            <a href="/admin/dashboard" className="nav-link side-link active">Dashboard</a>
          </li>
          <li className="nav-item">
            <a href="/admin/contact" className="nav-link side-link">Contact</a>
          </li>
          <li className="nav-item">
            <a href="/admin/hirings" className="nav-link side-link">Hirings</a>
          </li>
          <li className="nav-item">
            <a href="/admin/logout" className="nav-link side-link">Log out</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
