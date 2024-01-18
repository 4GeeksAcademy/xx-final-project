import React from "react";

export const Login = () => {

    return(
        <div className="text-center mt-5">
            <input style={{margin: "5px"}} type="text" placeholder="email"/>
            <input type="password" placeholder="password" />
            <button style={{margin: "5px"}}>Submit</button>
        </div>
    )
}