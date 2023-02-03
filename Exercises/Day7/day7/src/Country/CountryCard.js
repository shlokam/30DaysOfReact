import React from "react";
import Country from "./Country";
// import {countries} from 'country-list-json';
import './CountryCard.css';

export default function CountryCard(props){

    return(
        <div className="card">
            <img src={props.item.image} style={{width:'200px'}}/>
            <table>
                <tr>
                    <th className="head">Name</th>
                    <th>{props.item.name}</th>
                </tr>
                <tr>
                    <th className="head">Code</th>
                    <th>{props.item.code}</th>
                </tr>
                <tr>
                    <th className="head">Emoji</th>
                    <th>{props.item.emoji}</th>
                </tr>
                <tr>
                    <th className="head">Unicode</th>
                    <th>{props.item.unicode}</th>
                </tr>
            </table>
            

        </div>
    )
}