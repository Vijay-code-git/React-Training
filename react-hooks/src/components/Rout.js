import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Services from "./Services";
import Navbar from "./Navbar";
import SignUp from './SignUp';

function Rout() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp/>} />
            </Routes>
        </Router>
    )
}
export default Rout;