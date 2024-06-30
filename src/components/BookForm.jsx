import React from "react";
import { IoMdClose } from "react-icons/io";

const BookForm = ({ toggleBookForm, setFormData, formData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="form-underlay position-absolute d-flex justify-content-center align-items-center position-relative">
        <IoMdClose
          onClick={toggleBookForm}
          color="white"
          size={50}
          className="position-absolute rounded-1 bg-active close-icon p-2"
          cursor="pointer"
        />
        <form className="container shadow justify-content-between row border p-3 rounded-1 text-second">
          <div className="p-2 col-lg-3 gap-2 d-flex flex-column">
            <input
              className="p-3 rounded-1 fs-5 border-0"
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <select
              className="p-3 rounded-1 border-0 fs-5 no-chevron"
              name="bookingType"
              value={formData.bookingType}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Booking Type
              </option>
              <option className="fs-6 text-black" value="Standard">
                Standard
              </option>
              <option className="fs-6 text-black" value="Express">
                Express
              </option>
              <option className="fs-6 text-black" value="Home Shifting">
                Home Shifting
              </option>
            </select>
          </div>
          <div className="from-group p-2 col-lg-3 gap-2 d-flex justify-content-between">
            <select
              className="py-5 rounded-1 border-0 text-center w-50 fs-5 no-chevron"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                From
              </option>
              {/* Options for 'From' */}
            </select>
            <select
              className="py-5 rounded-1 border-0 w-50 text-center fs-5 no-chevron"
              name="to"
              value={formData.to}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                To
              </option>
              {/* Options for 'To' */}
            </select>
          </div>
          <div className="p-2 col-lg-3 gap-2 d-flex flex-column">
            <select
              className="p-3 rounded-1 border-0 fs-5 no-chevron"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Category
              </option>
              {/* Options for 'Category' */}
            </select>
            <div className="position-relative">
              <input
                className="p-3 fs-5 w-100 rounded-1 border-0"
                type="number"
                placeholder="Weight"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                required
              />
              <span className="kg-placeholder">kg</span>
            </div>
          </div>
          <div className="col-lg-3 p-2">
            <button
              onClick={toggleBookForm}
              className="btn w-100 py-5 text-center fs-5 bg-active"
            >
              Book Cargo
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookForm;