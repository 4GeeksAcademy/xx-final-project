import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'

export const Login = () => {

    return(
        <div className="text-center mt-5">
            <input style={{margin: "5px"}} type="text" placeholder="email"/>
            <input type="password" className="pass" placeholder="password" />
            <FontAwesomeIcon style={{margin: "5px"}} icon={faEye} />
            <button style={{margin: "5px"}}>Submit</button>
        </div>
    )
}