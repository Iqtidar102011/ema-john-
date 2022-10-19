import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext'

const PrivateRoute = ({ children }) => {
   
    
    const { user,loading } = useContext(AuthContext)
     // to have the current location
    const location = useLocation()
    if(loading){
        console.log('loading found')
        return <div>Loading...</div>
    }
    if (user && user.uid) {
        return children
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;
// <Navigate> করে লগিন এ নিয়ে যাবে। state দিতে হবে। কোন জায়গা থেকে নিয়ে যাবে। এটা current location ধরে রাখবে। এবার সেই current location কে replace করতে হবে। বাকি কাজ হবে <Login> 
// Component এর ভিতর। 
