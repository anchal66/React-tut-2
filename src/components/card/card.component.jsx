import React from 'react';
import './card.style.css'

export const Card =(props)=>(
    <div className="card-container">
        <img alt="Monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
    </div>
)