import React from "react";
import HexColor from "./HexColor";


let color = []

const hexColor= ()=>{
 
    const char = 'abcdef0123456789';
    let res='';
    for(let i=0;i<3;++i){
        res='';
    for(let i=0;i<6;++i){
        res+= char[Math.floor(Math.random() * char.length)]; 
    }
    console.log('color ' + res)
     color.push('#' + res);
}


}

export default function ColorGenerator(){
    hexColor();
    return(
        <div>
            <HexColor color={color}/>
        </div>
    )
}