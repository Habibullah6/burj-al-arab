import React from 'react';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import useAuth from '../../context/useAuth';


const Login = () => {
    const {handleGoogleSignIn} = useAuth();
    const location = useLocation();
    const history = useHistory()
    const redirectUrl = location.state?.from || '/home';

    
    const signInUsingGoogle = () => {
        handleGoogleSignIn()
        .then(result => {
            history.push(redirectUrl)   
        })
          .catch(error => {
              alert(error.message);
        })

    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>This is Login</h1>
            <button onClick={signInUsingGoogle}>google sign in</button>
        </div>
    );
};

export default Login;