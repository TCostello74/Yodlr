import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootswatch/dist/lux/bootstrap.min.css';


function Register() {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/users', { email, firstName, lastName });
            setMessage(`Registration successful: ${response.data.email}`);
        } catch (error) {
            setMessage('Registration failed.');
        }
    };

    return (
        <div className="container mt-5 border border-dark p-4" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4">Register</h2>
            <form onSubmit={handleSubmit} className="mb-3">
                <div className="form-group mb-3 ">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="form-control border border-dark p-4"/>
                </div>
                <div className="form-group mb-3">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" required className="form-control border border-dark p-4"/>
                </div>
                <div className="form-group mb-3">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last Name" required className="form-control border border-dark p-4"/>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            {message && <p className="text-center">{message}</p>}
            <div className="text-center">
                <Link to="/Admin" className="btn btn-secondary">Go to Admin List</Link>
            </div>
        </div>
    );
}

export default Register;
