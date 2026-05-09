import React, { useState } from 'react';
 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
 
const API_URL = process.env.REACT_APP_API_URL || '/api';
 
const getErrorMessage = (error) =>
    error.response?.data?.message || error.message || 'Error sending request';
 
function Register() {
 
    const navigate = useNavigate();
 
    const [formData, setFormData] = useState({
 
        name: '',
        email: '',
        password: ''
    });
 
    const handleChange = (e) => {
 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
 
        e.preventDefault();
 
        try {
 
            const res = await axios.post(
                `${API_URL}/auth/register`,
                formData
            );
 
            alert('Register Success');
 
            console.log(res.data);
 
            navigate('/');
 
        } catch (error) {
 
            alert(getErrorMessage(error));
        }
    };
 
    return (
 
        <div className="container">
 
            <form
                className="form"
                onSubmit={handleSubmit}
>
 
                <h1>Register</h1>
 
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
 
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
 
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
 
                <button type="submit">
                    Register
</button>
 
            </form>
 
        </div>
    );
}
 
export default Register;