import React from "react";
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/js.png';
import react from '../images/react.png'
import './FrontEnd.css';

function FrontEnd(){
    return(
        <div className="frontEnd"
        //style={{width:'830px',height:'120px',
        //overflowX:'scroll',overflowY:'hidden'
        //}}
        >
            <h1>FrontEnd Technologies</h1>
            <img src={html} 
            // style={{float:'left',width:'10',height:'10'}}
            />
            <img src={css} 
            // style={{float:'left',width:'10',height:'10'}}
            />
             <img src={js}
            //  style={{float:'left',width:'10',height:'10'}} 
            //style={{width:'10rem' ,height:'10rem' }}
            />
            <img src={react} 
            // style={{float:'left',width:'10',height:'10'}}
            //style={{width:'10rem' ,height:'10rem' }} */}
            />

        </div>
    )
}

export default FrontEnd