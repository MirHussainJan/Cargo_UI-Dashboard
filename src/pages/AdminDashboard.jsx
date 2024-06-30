import React, { useRef, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import Card from "../components/Card";
import { ImTruck } from "react-icons/im";
import { FaCross, FaUsers } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { IoAnalytics } from "react-icons/io5";
import RightPanelHeader from "../components/RightPanelHeader";
import Tablerow from "../components/Tablerow";
import data from "../assets/Orders";
import { IoMdClose } from "react-icons/io";

const AdminDashboard = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const sidebar = useRef();

  const handleRowClick = (order) => {
    setClicked(true);
    sidebar.current.style.zIndex = -1;
    setSelectedOrder(order);
  };

  const handleClose = () => {
    setClicked(false);
    sidebar.current.style.zIndex = 1;
    setSelectedOrder(null);
  };

  return (
    <>
      <div className="row m-0">
        <div ref={sidebar} className="sidebar sticky-top rounded-1 col-lg-2">
          <AdminSidebar />
        </div>
        <div className="col-lg-10 p-0 align-self-start">
          <RightPanelHeader title={"Dashboard"} />
          <div className="cards row mb-5">
            <Card
              heading="Total Shipments"
              number={6521}
              icon={<FaBoxOpen size={20} color="black" />}
            />
            <Card
              heading="Orders"
              number={300}
              icon={<ImTruck size={20} color="black" />}
            />
            <Card
              heading="Customers"
              number={150}
              icon={<FaUsers size={20} color="black" />}
            />
            <Card
              heading="Revenue"
              number="75$"
              icon={<IoAnalytics size={20} color="black" />}
            />
          </div>
          <div className="px-3 row m-0 justify-content-between">
            {data.map((item, index) => (
              <Tablerow key={index} item={item} onRowClick={handleRowClick} />
            ))}
          </div>
          {clicked && (
            <div className="underlay">
              <div className="order-details-card shadow text-center p-3 border rounded-1 my-3">
                <IoMdClose
                  onClick={handleClose}
                  color="white"
                  size={50}
                  className="position-absolute rounded-1 bg-active close-icon p-2"
                  cursor="pointer"
                />
                <h2 className="text-apna fw-bold">Order Details</h2>
                <p className="text-second">
                  <strong>Order ID:</strong> {selectedOrder.id}
                </p>
                <p className="text-second">
                  <strong>Full Name:</strong> {selectedOrder.fullName}
                </p>
                <p className="text-second">
                  <strong>Booking Type:</strong> {selectedOrder.bookingType}
                </p>
                <p className="text-second">
                  <strong>From:</strong> {selectedOrder.from}
                </p>
                <p className="text-second">
                  <strong>To:</strong> {selectedOrder.to}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
