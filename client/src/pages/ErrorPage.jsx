import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import image from "../assets/404.gif";

function ErrorPage(){
    const navigate = useNavigate();

    // redirect user to the previous page after 6 seconds
    useEffect(() => {
        setTimeout(() => {
            navigate(-1);
        }, 6000)
    })

    return(
        <section className="error-page">
            <div className="error-page-container">
                <img src={image} alt="Page not found"/>
                {/* <h1>404</h1> */}
                <p>This page does not exist. You will be redirected to the previous page shortly.</p>
            </div>
        </section>
    )
}

export default ErrorPage;