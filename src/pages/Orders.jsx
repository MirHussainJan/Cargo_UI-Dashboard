import React from "react";
import AdminSidebar from "../components/AdminSidebar";
import RightPanelHeader from "../components/RightPanelHeader";
import Pie from "../components/Pie";
import OrdersTable from "../components/OrdersTable";

const Orders = () => {
  return (
    <div className="row m-0">
      <div className="sidebar sticky-top rounded-1 col-lg-2">
        <AdminSidebar />
      </div>
      <div className="col-lg-10 p-0 align-self-start">
        <RightPanelHeader title={"Orders"} />
        <div className="row m-0 align-items-center">
          <div className="col-lg-7 orders-table-container">
            <OrdersTable />
          </div>
          <div className="col-lg-5 sticky-pie">
            <Pie />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;