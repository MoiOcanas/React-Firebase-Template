import React from 'react';

//Styles
import './card.css';

const Card = (props) => (
    <div>
        <div id="card-data">
            <h3>{props.title}</h3>
            <a href={props.site} target="_blank">
                <img src={props.img} alt="" id="card-img" />
            </a>
            <a href={props.site} target="_blank">Visit page</a>
        </div>
    </div>
);

export default Card;