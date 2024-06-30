import React from "react";
import truckImage from "../assets/hero-imge.png"; // Adjust this to use dynamic images if needed

const Tablerow = ({ item, onRowClick }) => {
  return (
    <div
      className="pointer orders rounded-2 px-3 py-4 border my-3 d-flex align-items-center justify-content-between overflow-x-hidden col-lg-5"
      onClick={() => {
        console.log('Table row clicked:', item);
        onRowClick(item);
      }}
    >
      <div className="d-flex flex-column">
        <h1 className="text-apna m-0 text-capitalize fw-bold">
          Order # <span className="color-apna">{item.id}</span>
        </h1>
        <div className="status my-2">
          <p className="mb-1 text-second text-capitalize">
            <span className="dot checking"></span> To:
            <span className="time fw-bold text-capitalize">{item.to}</span>
          </p>
          <p className="mb-1 text-second">
            <span className="dot in-transit"></span> From:
            <span className="time fw-bold text-capitalize">{item.from}</span>
          </p>
          <p className="mb-1 text-second">
            <span className="dot out-for-delivery"></span> Category:
            <span className="time fw-bold text-capitalize">{item.category}</span>
          </p>
        </div>
      </div>
      <div className="truck-image mirror">
        <img src={truckImage} alt="Truck" />
      </div>
    </div>
  );
};

export default Tablerow;