import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserComponent from "./components/UserComponent";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import Reschedule from "./pages/Reschedule";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App">
      {/* <UserComponent /> */}
      <>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/reschedule" element={<Reschedule />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
