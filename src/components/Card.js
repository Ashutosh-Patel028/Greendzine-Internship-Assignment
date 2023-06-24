import React from 'react';
import "./Card.css";

function Card(props){
    const {id,firstName,avatar}=props;
    // console.log(id,firstName,avatar);
    return (
        <div className='card-container'>
            <div className='card-main' id={id}>
                <div className='Img-Div'>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
            <p>{firstName}</p>
        </div>
    )
}

export default Card;