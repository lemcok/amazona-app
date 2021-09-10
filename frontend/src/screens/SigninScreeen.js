import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLoginEmailPassword } from '../actions/userActions';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';

export const SigninScreeen = ({ location, history }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/' ;
    const { userInfo, loading, error } = useSelector(state => state.userAuth)

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch( startLoginEmailPassword( email, password ) );
    }

    useEffect(() => {
        if (userInfo) {
            history.push( redirect );
        }
    }, [ userInfo, history, redirect ])
    
    return (
        <div>
            <form onSubmit={ handleSubmitForm } className="form">
                <div>
                    <h1>Login</h1>
                </div>
                { loading && <LoadingBox/> }
                { error && <MessageBox variant='danger'>{ error }</MessageBox> }
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

