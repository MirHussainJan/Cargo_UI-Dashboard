import React from "react";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="underlay">
      <div className="confirmation-modal p-3 border rounded my-3">
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this order?</p>
        <div className="modal-buttons">
          <button className="btn btn-danger" onClick={onConfirm}>
            Yes
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;