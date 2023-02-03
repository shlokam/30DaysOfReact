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


    return(
        <div>
            Country
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