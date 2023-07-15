import React from 'react';
import './Register.css';
const Register = () =>{
    return(
        <div className='main'>
            <div className='form'>
        <form>
        <h3>Login Form</h3><br/>
            <input type="number" placeholder='Enter Number'/><br/>
            <input type="password" placeholder='Password'/><br/>
            <button>Sign In</button>
        </form>
        </div>
        
        </div>
    )
}
export default Register;