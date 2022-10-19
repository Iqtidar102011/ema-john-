import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // const navigate = useNavigate()
    // // const handleLogOut = () => {
    // //     logOut();
    // //     navigate('/login')

    // }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to='/'>Shop</Link>
                <Link to="/order">Orders</Link>

                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/shipping">Shipping</Link>
                {
                    user?.uid ?
                        <button onClick={logOut}>Log Out</button>
                        :

                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                        </>
                }
            </div>
        </nav>
    );
};

export default Header;