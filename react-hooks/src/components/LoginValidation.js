import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Url = "http://restapi.adequateshop.com";

export default function LoginValidation() {
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userDetails, setUserDetails] = useState(
        {
            email: '',
            password: ''
        }
    )

    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setUserDetails({ ...userDetails, email: e.target.value });
        if (!userDetails.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i)) {
            setEmailError('Please enter a valid email address')
        } else {
            setEmailError('');
        }
    }

    const handlePasswordChange = (e) => {
        setUserDetails({ ...userDetails, password: e.target.value })
        if (!userDetails.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)) {
            setPasswordError('Password must have at least 6 characters, 1 number, 1upperCase letter, 1 lowercase letter, and 1 specail character')
        } else {
            setPasswordError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(Url + `/api/authaccount/login`, userDetails).then((response) => {
            toast.success(`Welcome ${userDetails.email}`);
            navigate("/dashboard")
        })
            .catch((error) => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <center>
                <div>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Email :</label>
                            <input type="text" value={userDetails.email} onChange={handleEmailChange} required />
                        </div>
                        <div>
                            <span className="error">{emailError}</span>
                        </div>
                        <br />
                        <div>
                            <label>Password :</label>
                            <input type="password" value={userDetails.password} onChange={handlePasswordChange} required />
                            <div>
                                <span className="error">{passwordError}</span>
                            </div>
                            <br />
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </center>
        </div>
    )
}