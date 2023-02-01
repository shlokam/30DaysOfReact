import React from "react";
import './HexColor.css';

const onClick = ()=>{
    window.location.reload(false);
}


export default function HexColor(props){

        console.log("hex coloe "+ props.color);
        let color1 = props.color[0];
        let color2 = props.color[1];
        let color3 = props.color[2];
    
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