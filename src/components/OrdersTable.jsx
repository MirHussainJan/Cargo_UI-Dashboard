import React, { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import initialData from "../assets/Cargo";
import initialOrders from "../assets/Orders";
import ConfirmationModal from "./ConfirmationModal";
import UpdateModal from "./UpdateModal";

const OrdersTable = () => {
  const [data, setData] = useState(initialData);
  const [orders, setOrders] = useState(initialOrders);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleDelete = (id) => {
    setIsModalOpen(true);
    confirmDelete(id);
  };
  
  const confirmDelete = (id) => {
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleAssign = (id) => {
    const order = data.find((row) => row.id === id);
    setOrders([...orders, order]);
    const updatedData = data.filter((row) => row.id !== id);
    setData(updatedData);
  };

  const handleUpdate = (id) => {
    setSelectedOrder(data.find((row) => row.id === id));
    setIsUpdateModalOpen(true);
  };

  const confirmUpdate = (updatedOrder) => {
    const updatedData = data.map((row) =>
      row.id === updatedOrder.id ? updatedOrder : row
    );
    setData(updatedData);
    setIsUpdateModalOpen(false);
  };

  const cancelUpdate = () => {
    setIsUpdateModalOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <table className="table-secondary w-100 my-2 text-center">
        <thead>
          <tr className="bg-active border-0 text-apna">
            <th className="border-top py-3">Number</th>
            <th className="border-top">Name</th>
            <th className="border-top">To</th>
            <th className="border-top">From</th>
            <th className="border-top">Category</th>
            <th className="border-top">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border-top py-3 fw-bold text-capitalize">{row.id}</td>
              <td className="border-top text-second text-capitalize">{row.fullName}</td>
              <td className="border-top text-second text-capitalize">{row.to}</td>
              <td className="border-top text-second text-capitalize">{row.from}</td>
              <td className="border-top text-second text-capitalize">{row.category}</td>
              <td className="border-top text-second text-capitalize">
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleAssign(row.id)}
                >
                  <FaUserPlus />
                </button>
                <button
                  className="btn btn-danger btn-sm me-2"
                  onClick={() => handleDelete(row.id)}
                >
                  <FaTrash />
                </button>
                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => handleUpdate(row.id)}
                >
                  <FaEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        order={selectedOrder}
        onConfirm={confirmUpdate}
        onCancel={cancelUpdate}
      />
    </>
  );
};

export default OrdersTable;