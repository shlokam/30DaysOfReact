import React, { useState } from 'react';

export default function Event(){

    const [firstName,setFirstName] = useState('')
    const [message,setmessage] = useState('')
    const [key,setKey] = useState('')

    const handleClick = (e)=>{
        setmessage('welcome to world of events')
    }

    const handleMouseMove = (e)=>{
        setmessage('mouse is moving')
    }

    const handleChange = (e)=>{
        setFirstName(e.target.value);
        setmessage(e.target.value);
    }

    const handleKeyPress = (e) =>{
        setmessage(`${e.target.value} has been pressed and keycode is` + e.charCode)
    }

    const handleBlur = (e) =>{
        setmessage('Input filed has been blureed')
    }

    const handleCopy = (e) =>{
        setmessage('Using 30 days of react')
    }

    return(
        <div>
            Event

            <h1>Welcome to world of events</h1>

            <button onClick={handleClick}>Click Me</button>
            <button onMouseMove={handleMouseMove}>Move mouse on me</button>

            <p onCopy={handleCopy}>Check copy right permisson</p>

            <p>{message}</p>

            <label htmlFor=''>Text for onKeyPress Event : </label>
            <input type='text' onKeyPress={handleKeyPress}/>
            <br/>

            <label htmlFor=''>Text for onBlur Event : </label>
            <input type='text' onBlur={handleBlur}/>
            
            {/* <form 
            // onSubmit={handleSubmit}
            >
                <div>
                    <label htmlFor='firstName'>First Name:</label>
                    <input
                        onChange={handleChange}
                        name='firstName'
                        value={value}
                    />
                </div>

                <div>
                    <input type='submit' value='Submit'/>
                </div>
            </form> */}
            
        </div>
    )
}