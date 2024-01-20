import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'


import "../../styles/login.css"

export const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    return(
        <div className="login-body text-center mt-5">
            <div className="inputs">
                <input 
                    className="email" 
                    type="text" 
                    placeholder="email"/>
                <input 
                    type={showPassword ? "text" : "password"} 
                    className="pass" 
                    placeholder="password" 
                />
            </div>
            <div className="icons">
                <FontAwesomeIcon 
                    onClick={togglePassword} 
                    className="eye-icon" 
                    icon={showPassword ? faEyeSlash : faEye} />
            </div>
            <button className="submit-btn">Submit</button>
        </div>
    )
}