import React from "react";
import "./Navbar.css";
import {FcServices} from 'react-icons/fc';
import {FcHome} from 'react-icons/fc';

function Navbar() {
    return(
        <div className='nav1'>
            <nav>
            <h1 style={{fontSize:"40px"}}>Postal</h1>
            <img src="https://www.kindpng.com/picc/m/10-102669_india-post-logo-png-transparent-png.png" alt=""className="image"></img>
            <ul>
                <li>
                    Home<FcHome/>
                    <li>
                        Services<FcServices/>
                    </li>
                </li>
            </ul>
            <botton>Sign In</botton>
            </nav>
        </div>
    )
}
export default Navbar;