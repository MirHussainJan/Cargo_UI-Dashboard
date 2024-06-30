import React, { useState } from "react";
import "./sidebar.css";
import { IoSettings } from "react-icons/io5";
import { ImTruck } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="px-2 pt-3">
      <div className="left d-flex align-items-center mx-auto w-75 gap-2">
        <img
          width={200}
          src="https://voigt-logistik.de/wp-content/uploads/2023/06/transport.gif"
          alt="Cargo Link"
        />
        <h3 className="text-apna fw-bold line-spacing w-50 m-0">Cargo Link</h3>
      </div>
      <hr />
      <ul className="list-unstyled d-flex flex-column gap-3 text-second mt-">
        <Link
          to="/dashboard"
          className="text-decoration-none text-second"
          onClick={() => handleClick("/dashboard")}
        >
          <li
            className={`${
              activeItem === "/dashboard" ? "bg-active" : ""
            } rounded-1 my-3 p-2 d-flex align-items-center gap-3 fs-6 text-black`}
          >
            <MdDashboard size={25} /> Dashboard
          </li>
        </Link>
        <Link
          to="/orders"
          className="text-decoration-none text-second"
          onClick={() => handleClick("/orders")}
        >
          <li
            className={`${
              activeItem === "/orders" ? "bg-active" : ""
            } rounded-1 my-3 p-2 d-flex align-items-center gap-3 fs-6 text-black`}
          >
            <ImTruck size={25} /> Orders
          </li>
        </Link>
        <Link
          to="/customers"
          className="text-decoration-none text-second"
          onClick={() => handleClick("/customers")}
        >
          <li
            className={`${
              activeItem === "/customers" ? "bg-active" : ""
            } rounded-1 my-3 p-2 d-flex align-items-center gap-3 fs-6 text-black`}
          >
            <FaUsers size={25} /> Customers
          </li>
        </Link>
        <Link
          to="/settings"
          className="text-decoration-none text-second"
          onClick={() => handleClick("/settings")}
        >
          <li
            className={`${
              activeItem === "/settings" ? "bg-active" : ""
            } rounded-1 my-3 p-2 d-flex align-items-center gap-3 fs-6 text-black`}
          >
            <IoSettings size={25} /> Settings
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default AdminSidebar;