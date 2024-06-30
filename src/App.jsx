import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import '../src/components/globals.css'
import Registration from "./pages/Registration";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/dashboard" element={<AdminDashboard/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/customers" element={<Customers/>} />
        <Route path="/settings" element={<Settings/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
};

export default App;
