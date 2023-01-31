import React from "react";
import './Newsletter.css';

export default function NewsLetter(){
    
    const heading = 'SUBSCRIBE';
    const text = 'Sign up with your email adress to recieve news and updates';
    const firstNamePlaceHolder = 'First Name';
    const lastNamePlaceHolder = 'Last Name';
    const emailPlaceHolder = 'Email';
    const buttonText= 'Subscribe';

    return(
        <div className="newsletter">
            <h2>{heading}</h2>
            <p>{text}</p>

            <input
            placeholder={firstNamePlaceHolder}
            type='text'
            />
            <input
            placeholder={lastNamePlaceHolder}
            type='text'
            />
            <input
            placeholder={emailPlaceHolder}
            type='email'
            />
            <button>{buttonText}</button>
        </div>
    )
}