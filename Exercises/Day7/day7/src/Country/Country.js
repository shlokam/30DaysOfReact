import React, { useState } from 'react'
import country from './countries';
// import {countries} from 'country-list-json';

import CountryCard from './CountryCard';


export default function Country(){


    // Math.floor(Math.random() * country.length);
    const [index,setIndex] = useState(0);

const change = ()=>{
    setIndex(Math.floor(Math.random() * country.length));
};

const  [isDark,setIsDark] = useState(false);

const changeBackground = () =>{
  if(isDark==true) 
   setIsDark(false)

   else 
   setIsDark(true)

}

    return(
        <div style = {{ backgroundColor: isDark? 'white': '#121111'}}>
            <h1 style = {{ color: isDark? 'black': 'white'}}>100 Days of Code - Day 9</h1>
            <h2 style = {{ color: isDark? 'black': 'white'}}>30 Days of React - Day 7</h2>
            <h3 style = {{ color: isDark? 'black': 'white'}}>Random Country Generator using States</h3>

            <button onClick={changeBackground} style={{
            backgroundColor : isDark? 'black': 'white',
            color : isDark? 'white': 'black',
            border : '2px solid #4CAF50',
            width:'150px',
            padding:'15px 32px',
            textAlign:'center',
            fontSize:'13px'
        }}>Dark Theme</button>

        <hr />

        <CountryCard item = {country[index]}/>
        <button onClick={change} 
        style={{
            backgroundColor : 'white',
            color : 'black',
            border : '2px solid #4CAF50',
            width:'150px',
            padding:'15px 32px',
            textAlign:'center',
            fontSize:'16px'
        }}>Generate</button>
        </div>
    )

}