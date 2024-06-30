import React from "react";
import { FaCircleChevronLeft, FaCircleUser } from "react-icons/fa6";
import { GoBellFill } from "react-icons/go";

const RightPanelHeader = ({title}) => {
  return (
    <>
      <div className="top w-100 bg-active px-3 py-3">
        <div className="top-header d-flex justify-content-between align-items-center">
          <FaCircleChevronLeft color="black" size={27} />
          <div className="user-cred d-flex align-items-center gap-2">
            <GoBellFill color="black" size={15} />
            <FaCircleUser color="black" size={27} />
            <p className="text-second text-black m-0">Bievenido, Harvey Romero</p>
          </div>
        </div>
        <hr />
        <h1 className="text-apna text-black fw-bold my-5">{title}</h1>
      </div>
    </>
  );
};

export default RightPanelHeader;
