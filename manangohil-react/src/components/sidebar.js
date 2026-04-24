import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const [sidebar, setSidebarOpen] = useState(false);
  return (
    <>
      {/* <header className="bg-slate-900 w-full text-white p-4">
        <div className="flex items-center  gap-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <img
                src="/logo.png"
                alt="Dashboard Icon"
                className="h-8 w-8 inline-block mr-2"
              />

            </h1>
          </Link>
          <button
            className="text-white focus:outline-none lg:hidden ml-auto"
            onClick={() => setSidebarOpen(!sidebar)}
          >
            toggle
          </button>
        </div>
      </header> */}
      <div
        className={`fixed flex gap-3 flex-col w-64 bg-slate-900 h-full text-white p-4 -translate-x-64 shadow ${sidebar ? "translate-x-0" : "-translate-x-64"} transition-transform lg:translate-x-0`}
      >
        <nav className="">
          <header className="text-[20px] font-bold flex items-center justify-center gap-2 p-1 mb-5">
            Student Dashboard
            <br />
            -----------------------
          </header>
          <div className="flex flex-col gap-3">
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-blue-500 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600"
                }`
              }
              to="/attendance"
            >
              Attendance
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-blue-500 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600"
                }`
              }
              to="/results/sem1"
            >
              Semester 1 Results
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-blue-500 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600"
                }`
              }
              to="/results/sem2"
            >
              Semester 2 Results
            </NavLink>
            <NavLink
              onClick={() => setSidebarOpen(!sidebar)}
              className={({ isActive }) =>
                `rounded-full bg-blue-500 px-4 py-3 text-l font-bold transition ${
                  isActive
                    ? "border-white bg-white text-slate-900"
                    : "border-white/25 text-white hover:border-white hover:bg-blue-600"
                }`
              }
              to="/profile"
            >
              Profile
            </NavLink>
            <footer>
              <img
                src="/logo.png"
                alt="Logo"
                className=" flex items-center h-10 w-10 mt-auto"
              />
            </footer>
          </div>
        </nav>
        {/* <footer>
          <img src="/logo.png" alt="Logo" className=" flex items-center h-10 w-10 mt-auto" />
        </footer> */}
      </div>
      <header className="bg-slate-900 w-full shadow shadow-slate-950/30 text-white p-4">
        <div className="flex items-center  gap-4">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <img
                src="/logo.png"
                alt="Dashboard Icon"
                className="h-8 w-8 inline-block mr-2"
              />
            </h1>
          </Link>
          <button
            className="text-white font-bold focus:outline-none lg:hidden ml-auto mr-2"
            onClick={() => setSidebarOpen(!sidebar)}
          >
            | | |
            {/* <img
              src="/menu.png"
              alt="Menu Icon"
              className="h-8 bg-slate-900 w-8"
            /> */}
          </button>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
