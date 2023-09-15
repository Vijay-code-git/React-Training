import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import './Navbar.css';
import image from "../components/Assets/indiapost.jpg"
import { useState } from "react";
import SignUp from "./SignUp";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        justify-content="flex-end"
                        sx={{ mr: 2 }}>
                        <img src={image} alt="India Post" className="image" />
                    </IconButton>
                    <Link to="/home" className="home"><Button color="inherit" >Home</Button></Link>
                    <Link to="/services"><Button color="inherit">Services</Button></Link>
                    <Link to="/login"><Button color="inherit" onClick={handleOpen}>Login</Button></Link>
                    {/* <SignUp open={open} handleClose={handleClose}/> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}