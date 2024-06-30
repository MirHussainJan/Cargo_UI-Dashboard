import React, { useState, useEffect } from "react";

const UpdateModal = ({ isOpen, order, onConfirm, onCancel }) => {
  const [updatedOrder, setUpdatedOrder] = useState(order);

  useEffect(() => {
    setUpdatedOrder(order);
  }, [order]);

  if (!isOpen || !order) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(updatedOrder);
  };

  return (
    <div className="underlay">
      <div className="update-modal p-3 border rounded my-3">
        <h2>Update Order</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="fullName">Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="fullName"
              value={updatedOrder.fullName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="to">To</label>
            <input
              type="text"
              className="form-control"
              id="to"
              name="to"
              value={updatedOrder.to}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="from">From</label>
            <input
              type="text"
              className="form-control"
              id="from"
              name="from"
              value={updatedOrder.from}
              onChange={handleChange}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={updatedOrder.category}
              onChange={handleChange}
            />
          </div>
          <div className="modal-buttons">
            <button type="submit" className="btn btn-success">
              Update
            </button>
            <button type="button" className="btn btn-secondary" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateModal;
