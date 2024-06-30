import React, { useEffect, useRef, useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, reset } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const RegForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signClicked, setSignClicked] = useState(false);
  const [LoginClicked, setLoginClicked] = useState(true);
  const signup = useRef();
  const login = useRef();
  const [passEye, setPassEye] = useState(false);
  const [confirmPassEye, setConfirmPassEye] = useState(false);

  const [formFields, setFormFields] = useState({
    username: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const { username, email, dob, password, confirmPassword, role } =
    formFields;

  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      navigate("/");
    }
    dispatch(reset());
  }, [isError, isSuccess, dispatch, navigate, message]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !dob || !password || !role) {
      toast.error("Please make sure you fill out all the fields!");
    } else if (password !== confirmPassword) {
      toast.error("Oops! Passwords don't match. Please try again.");
    } else {
      dispatch(
        registerUser({
          username,
          password,
          email,
          role,
        })
      );
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please make sure you fill out all the fields!");
    } else {
      dispatch(loginUser({ email, password }));
    }
  };

  const handleSignClicked = () => {
    signup.current.style.transform = "translateX(0)";
    login.current.style.transform = "translateX(120%)";
    setSignClicked(true);
    setLoginClicked(false);
  };

  const handleLoginClicked = () => {
    signup.current.style.transform = "translateX(-120%)";
    login.current.style.transform = "translateX(0)";
    setLoginClicked(true);
    setSignClicked(false);
  };

  const handlePassClick = () => {
    setPassEye(!passEye);
  };

  const handleConfirmClick = () => {
    setConfirmPassEye(!confirmPassEye);
  };

  const getPasswordInputType = () => {
    return passEye ? "text" : "password";
  };

  const getConfirmPasswordInputType = () => {
    return confirmPassEye ? "text" : "password";
  };

  return (
    <>
      <div className="col-lg-9 rounded-2 mx-auto px-5 py-4">
        <div className={`row form-parent align-items-center justify-content-center ${isLoading ? "justify-content-center" : ""}`}>
          <h1 className="text-center display-3 text-apna fw-bold m-0">Welcome!</h1>
          <p className="text-center fw-normal text-second m-0">
            Create account to use Cargo Link
          </p>
          {isLoading ? (
            <ClipLoader className="my-5 text-apna mx-auto" speedMultiplier={0.7} color="#F8D522" />
          ) : (
            <>
              <div className="actual-form col-lg-6 overflow-hidden">
                <div className="upper-form d-flex gap-3 my-3">
                  <button
                    onClick={handleSignClicked}
                    className={
                      signClicked
                        ? "btn text-second bg-active w-50 rounded-1"
                        : "btn text-second btn-outline-apna w-50 rounded-1"
                    }
                  >
                    Signup
                  </button>
                  <button
                    onClick={handleLoginClicked}
                    className={
                      LoginClicked
                        ? "btn text-second bg-active w-50 rounded-1"
                        : "btn text-second btn-outline-apna w-50 rounded-1"
                    }
                  >
                    Login
                  </button>
                </div>
                <div className="forms d-flex justify-content-center">
                  <form ref={signup} className="sign-up w-100 text-second">
                    <div className={`email input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <label>Email</label>
                    </div>
                      <div className={`f_name input_wrap`}>
                        <input
                          className="py-2"
                          required
                          type="text"
                          name="username"
                          value={username}
                          onChange={handleInputChange}
                        />
                        <label>Username</label>
                      </div>
                    <div className={`dob input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type="date"
                        name="dob"
                        value={dob}
                        onChange={handleInputChange}
                        placeholder="Date"
                      />
                    </div>
                    <div className="role input_wrap">
                      <select
                        className="py-2 w-100"
                        required
                        name="role"
                        value={role}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Role</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                        <option value="driver">Driver</option>
                      </select>
                    </div>
                    <div className={`password input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type={getPasswordInputType()}
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                      />
                      <label>Password</label>
                      {passEye ? (
                        <BsEye
                          color="black"
                          className="eye"
                          onClick={handlePassClick}
                          cursor="pointer"
                        />
                      ) : (
                        <BsEyeSlash
                          color="black"
                          className="eye"
                          onClick={handlePassClick}
                          cursor="pointer"
                        />
                      )}
                    </div>
                    <div className={`confirm_password input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type={getConfirmPasswordInputType()}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleInputChange}
                      />
                      <label>Confirm Password</label>
                      {confirmPassEye ? (
                        <BsEye
                          color="black"
                          className="eye"
                          onClick={handleConfirmClick}
                          cursor="pointer"
                        />
                      ) : (
                        <BsEyeSlash
                          color="black"
                          className="eye"
                          onClick={handleConfirmClick}
                          cursor="pointer"
                        />
                      )}
                    </div>
                    <div className="btns d-flex justify-content-center">
                      <button
                        onClick={handleRegister}
                        className="btn rounded-1 w-50 bg-active"
                      >
                        Signup
                      </button>
                    </div>
                  </form>
                  <form ref={login} className="log-in w-100 text-second">
                    <div className={`email input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                      />
                      <label>Email</label>
                    </div>
                    <div className={`password input_wrap`}>
                      <input
                        className="py-2"
                        required
                        type={getPasswordInputType()}
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                      />
                      <label>Password</label>
                      {passEye ? (
                        <BsEye
                          color="black"
                          className="eye"
                          onClick={handlePassClick}
                          cursor="pointer"
                        />
                      ) : (
                        <BsEyeSlash
                          color="black"
                          className="eye"
                          onClick={handlePassClick}
                          cursor="pointer"
                        />
                      )}
                    </div>
                    <div className="btns d-flex justify-content-center">
                      <button
                        onClick={handleLogin}
                        className="btn rounded-1 w-50 bg-active"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default RegForm;