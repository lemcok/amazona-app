import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const SigninScreeen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmitForm} className="form">
                <div>
                    <h1>Login</h1>
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        required
                        onChange={ (e) => setPassword(e.target.value) }
                    />
                </div>

                <div>
                    <label/>
                    <button className="primary" type="submit" >Login</button>
                </div>

                <div>
                    <label/>
                    <div>
                        New customer? <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}

