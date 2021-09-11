import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startRegister } from '../actions/userActions';
import { LoadingBox } from '../components/LoadingBox';
import { MessageBox } from '../components/MessageBox';

export const RegisterScreeen = ({ location, history }) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1] : '/' ;

    const { userInfo, loading, error } = useSelector(state => state.userRegister)

    const handleSubmitForm = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            alert('Password and confirm password are not match')
        }else {
            dispatch( startRegister( name, email, password ) )
        }
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
                    <h1>Create Account</h1>
                </div>
                { loading && <LoadingBox/> }
                { error && <MessageBox variant='danger'>{ error }</MessageBox> }
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter name"
                        required
                        autoComplete="off"
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        required
                        autoComplete="off"
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Enter confirm password"
                        required
                        onChange={ (e) => setConfirmPassword(e.target.value) }
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
                    <button className="primary" type="submit" >Register</button>
                </div>

                <div>
                    <label/>
                    <div>
                        Already have an account? <Link to={`/signin?redirect=${ redirect }`}>Sign-In</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
