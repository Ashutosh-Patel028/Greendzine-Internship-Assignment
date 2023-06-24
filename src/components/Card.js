import React from 'react';
import "./Card.css";

function Card(props){
    const {id,firstName,avatar}=props;
    console.log(id,firstName,avatar);
    return (
        <div className='card-container' id={id}>
            <img src={avatar}/>
        </div>
    )
}

export default Card;