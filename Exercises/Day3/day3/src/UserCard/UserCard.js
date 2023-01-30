import React from "react";
import img from '../images/user.png';
import './UserCard.css';
import {GoVerified} from 'react-icons/go'
export default function UserCard(){

    const name = "FIRSTNAME LASTNAME";
    const role = 'Developer';
    const location = 'Country'
    const skills = ['HTML' , 'CSS', 'Javascript','React','Redux','Node','MongoDB','MYSQL','Docker'];
    const date = 'Jan 30,2023'


    return(
        <div className="userCard">
            <img src={img}/>
            <h3>{name} <GoVerified/></h3>
            <p>{role} , {location}</p>
            <h3>Skills</h3> 
            
            <ul>

            
            {skills.map(skill=>(
                <li>
                    {skill}
                </li>
            ))}
            </ul>
            
            <div className="footer">
                <footer>
                    <p>Joined on {date}</p>
                </footer>

            </div>

        </div>
    )
}