import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import image from "../assets/warehouse-post-office-parcel-delivery-logistics-vector-23469707.jpg";
import BookForm from "../components/BookForm";
import Nav from "../components/Nav"

const Home = () => {
  const [bookForm, setBookForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    bookingType: '',
    from: '',
    to: '',
    category: '',
    weight: '',
  });

  const toggleBookForm = (e) => {
    e.preventDefault();
    setBookForm((prevState) => !prevState);
  };

  useEffect(() => {
    if (bookForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [bookForm]);

  return (
    <>
      <Nav/>
      <div className="home-wrapper row m-0 align-items-center py-0 text-center px-3">
        <div className="col-lg-6 col-md-6">
          <h1 className="m-0 display-1 fw-bold text-apna">Beyond</h1>
          <Typewriter
            options={{
              strings: ["Roads", "Countries", "Oceans", "Continents"],
              autoStart: true,
              loop: true,
              wrapperClassName: "m-0 display-1 fw-bold text-apna color-apna",
              cursorClassName: "typewriter-cursor",
            }}
          />
          <h4 className="fw-normal para text-center text-second w-75 mx-auto">
            Urban logistics perfected. Our facilities ensure top-notch security.
          </h4>
          <button
            onClick={toggleBookForm}
            className="bg-active px-2 py-2 w-50 my-2 rounded-1 text-second"
          >
            Book Cargo
          </button>
        </div>
        <div className="col-lg-6 col-md-6 end">
          <img src={image} alt="" />
        </div>
        {bookForm && <BookForm toggleBookForm={toggleBookForm} formData={formData} setFormData={setFormData}/>}
      </div>
    </>
  );
};

export default Home;