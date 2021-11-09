import React from 'react';
import './Card.css'

const Card = ({country, cases, deaths}) => {
    const deathRate = (deaths/cases) * 100;
    return(
        <div>
            <div className="container">
                <div className="card">
                    <h3 className="country">{country}</h3>
                    <h3>{cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h3>{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
                    <h3>{`${deathRate.toFixed(2)}%`}</h3>
                </div>
            </div>
            
        </div>
    );
}

export default Card;


