import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import './signup.css'

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    // state to handle error
    const [error, setError] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value

        // password validation
        if (password.length < 6) {
            setError('password should be at least 6 characters long');
            return
        }

        // password and confirm match validation
        if (password !== confirm) {
            setError('password did not match')
            return
        }

        createUser(email, password)
            .then(result => {
                const user = result.user
                form.reset();
            })
            .catch(error => console.error(error))

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit} >
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have ana account? <Link to='/login'> Log in</Link></p>
            <p className='error-text'>{error}</p>
        </div>
    );
};

export default SignUp;