import react from 'react';
import './Login.css';


const Login = () => {
    return (
        <div className='wrapper'>
            <form action="" >
                <h1>Login</h1>
                <div className="input_box">
                    <input type="text" placeholder='Username'required/>
                </div>
                <div className="input_box">
                    <input type="password" placeholder='Password'required/>
                </div>
           <button type="submit" >Login</button>
           <div className="register-link">
                <p>Don't have an account? <a href="#">Register</a></p>
            </div>    
            </form>
        </div>
    );
};

export default Login;
