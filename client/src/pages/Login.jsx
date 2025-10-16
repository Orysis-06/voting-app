import { Link } from "react-router-dom";
import { useState } from "react";

function Login(){

    const [userData, setUserData] = useState({fullName: "", email: "", password: "", password2: ""});

    // function to change controlled inputs
    const changeInputHandler =(e) =>{
        setUserData((prevState) => {
            return {...prevState, [e.target.name]: e.target.value}
        })
    }

    return(
        <section className="register">
            <div className="container register-container">
                <h2>Sign In</h2>
                <form>
                    <p className="form-error-message">Any error from the backend</p>
                    <input type="email" name="email" placeholder="Email Address" autoComplete="true" onChange={changeInputHandler}  />
                    <input type="password" name="password" placeholder="Password" autoComplete="true" onChange={changeInputHandler}  />
                    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
                    <button type="submit" className="btn primary">Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login;