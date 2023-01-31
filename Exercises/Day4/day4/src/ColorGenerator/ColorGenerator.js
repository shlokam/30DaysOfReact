import React from "react";
import './ColorGenerator.css';

let color = []
let color1,color2,color3;

const hexColor= ()=>{
 
    const char = 'abcdef0123456789';
    let color='';
    for(let i=0;i<6;++i){
        color+= char[Math.floor(Math.random() * char.length)]; 
    }
    console.log('color ' + color)
    return '#' + color;
}

const generate = ()=>{
    for(let i=0;i<3;++i){
        color.push(hexColor());
    }
}

const onClick = ()=>{
    window.location.reload(false);
}


export default function ColorGenerator(){

   generate();
    console.log(color);
    color1 = color[0];
    color2 = color[1];
    color3 = color[2];

    return(
        <div className="color">
            
            <h2>Random Color Generator</h2>
            
            <table>
            <tr>
                <td style ={{backgroundColor:color1}}>{color1}</td>
                <td style ={{backgroundColor:color2}}>{color2}</td>
                <td style ={{backgroundColor:color3}}>{color3}</td>

            </tr>
            </table>

            <button onClick={onClick}>Generate</button>
        </div>
    )
}