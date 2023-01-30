import React from "react";
import './Newsletter.css';

export default function NewsLetter(){
    return(
        <div className="newsletter">
            <h2>SUBSCRIBE</h2>
            <p>Sign up with your email adress to recieve news and updates</p>

            <input
            placeholder="First Name"
            type='text'
            />
            <input
            placeholder="Last Name"
            type='text'
            />
            <input
            placeholder="Email"
            type='email'
            />
            <button>Subscribe</button>
        </div>
    )
}