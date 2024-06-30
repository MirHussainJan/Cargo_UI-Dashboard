import React from "react";

const Card = ({ heading, number, icon }) => {
  return (
    <>
      <div className="card header-card shadow rounded-1 border col-lg-2 py-2 mx-auto cursor-pointer">
        <h6 className="text-apna m-0">{heading}</h6>
        <h3 className="yext -second">{number}</h3>
        <div className="ms-auto bg-active rounded-1 px-2 py-1">{icon}</div>
      </div>
    </>
  );
};

export default Card;
