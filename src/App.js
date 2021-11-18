import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import Appointment from "./pages/Appointment/Appointment/Appointment";
import AddDoctors from "./pages/Dashboard/AddDoctors/AddDoctors";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardHome from "./pages/Dashboard/DashboardHome/DashboardHome";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/AdminRoute/AdminRoute.";
import Login from "./pages/Login/Login/Login";

import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="" element={<DashboardHome />} />
              
              <Route path="payment/:appointmentId" element={<Payment redirectTo="/:appointmentId"> </Payment>} />
               
              <Route path="makeAdmin" element={<AdminRoute redirectTo="/">
                                                      <MakeAdmin />
                                                </AdminRoute>  } />
              <Route path="addDoctors" element={<AdminRoute redirectTo="/">
                                                      <AddDoctors />
                                                </AdminRoute>  } />
          </Route>
            <Route path="/appointment" element={<RequireAuth redirectTo="/login">
                                                      <Appointment />
                                                </RequireAuth>  } />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
