import React, { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="bg-slate-800 text-white p-4">
        <div className="flex items-center  gap-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <img
                src="/logo.png"
                alt="Dashboard Icon"
                className="h-8 w-8 inline-block mr-2"
              />
              Student Dashboard
            </h1>
          </Link>
          <button
            className="text-white focus:outline-none lg:hidden ml-auto"
            onClick={() => setSidebarOpen(!sidebar)}
          >
            toggle
          </button>
        </div>
      </header>
      <div className={`fixed w-64 bg-gray-800 text-white h-screen p-4 -translate-x-64 shadow ${sidebar ? 'translate-x-0' : '-translate-x-64'} transition-transform lg:translate-x-0`}>
        <nav className="flex flex-col space-y-4">
          <a
            href="/attendance"
            className="hover:bg-gray-700 rounded px-3 py-2 transition"
          >
            Attendance
          </a>
          <a
            href="/results/sem1"
            className="hover:bg-gray-700 rounded px-3 py-2 transition"
          >
            Semester 1 Results
          </a>
          <a
            href="/results/sem2"
            className="hover:bg-gray-700 rounded px-3 py-2 transition"
          >
            Semester 2 Results
          </a>
          <a
            href="/profile"
            className="hover:bg-gray-700 rounded px-3 py-2 transition"
          >
            Profile
          </a>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
