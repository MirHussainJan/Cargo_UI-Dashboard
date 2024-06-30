import React from "react";
import { MdLocalPhone } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const Nav = () => {
  return (
    <>
      <div className="nav border-bottom d-flex justify-content-between align-items-center py-3 px-4">
        <div className="left d-flex align-items-center gap-2 border-end">
          <img width={200} src="https://voigt-logistik.de/wp-content/uploads/2023/06/transport.gif" alt="" />
          <h3 className="text-apna fw-bold line-spacing w-50 m-0">
            Cargo Link
          </h3>
        </div>
        <div className="right d-flex align-items-center">
          <div className="headings d-flex gap-5 pe-5">
            <h5 className="m-0 py-2 px-3 rounded-1 pointer text-second btn-active">
              Home
            </h5>
            <h5 className="m-0 py-2 px-3 rounded-1 pointer text-second btn-active">
              About Us
            </h5>
            <h5 className="m-0 py-2 px-3 rounded-1 pointer text-second btn-active">
              Services
            </h5>
            <h5 className="m-0 py-2 px-3 rounded-1 pointer text-second btn-active">
              Contact
            </h5>
          </div>
          <div className="hamburger pointer py-2 px-3">
            <RxHamburgerMenu size={30} />
          </div>
          <div className="p-2 btn pointer rounded-1 bg-active gap-2 contact-button d-flex justify-content-between align-items-center">
            <MdLocalPhone />
            <p className="text-second fs-6 m-0">+92 300 2615897</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
