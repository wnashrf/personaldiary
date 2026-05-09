import React, { useState } from 'react';
 
import axios from 'axios';
 
const API_URL = process.env.REACT_APP_API_URL || '/api';
 
const getErrorMessage = (error) =>
    error.response?.data?.message || error.message || 'Error sending request';
 
function Dashboard() {
 
    const [formData, setFormData] = useState({
 
        title: '',
        content: '',
        mood: ''
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
 
            const token = localStorage.getItem('token');
 
            const res = await axios.post(
 
                `${API_URL}/diaries`,
 
                formData,
 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
 
            alert('Diary Created');
 
            console.log(res.data);
 
            setFormData({
                title: '',
                content: '',
                mood: ''
            });
 
        } catch (error) {
 
            alert(getErrorMessage(error));
        }
    };
 
    return (
 
        <div className="container">
 
            <div className="dashboard">
 
                <h1>Welcome to Your Diary</h1>
 
                <p>Write down your thoughts and feelings.</p>
 
                <form
                    className="form"
                    onSubmit={handleSubmit}
                >
 
                    <h2>Create New Entry</h2>
 
                    <input
                        type="text"
                        name="title"
                        placeholder="Entry Title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
 
                    <textarea
                        name="content"
                        placeholder="What's on your mind today?"
                        rows="6"
                        value={formData.content}
                        onChange={handleChange}
                        required
                    />
 
                    <input
                        type="text"
                        name="mood"
                        placeholder="How are you feeling? (e.g., happy, sad, excited)"
                        value={formData.mood}
                        onChange={handleChange}
                    />
 
                    <button type="submit">
                        Save Entry
                    </button>
 
                </form>
 
            </div>
 
        </div>
    );
}
 
export default Dashboard;