import React from "react";
import ContactUsForm from "../component/ContactUsForm";
import background from '../../img/login-background.jpg';

export const ContactUsPage = () => {

    return (
        <>
            <div
                className="background"
                style={{
                    backgroundImage: `url(${background})`,
                    width: '100%',
                    height: '100vh',
                }}
            ></div>
            <div>
                <ContactUsForm />
            </div>
        </>
      );
    

}

