import React from 'react';
import Card from './Card';

const CountryCard = ({countries}) =>{
    return(
        <div>
            {
                countries.map((place,i) =>{
                    return(
                        <Card
                        key = {i}
                        country = {place.Country}
                        cases = {place.TotalConfirmed}
                        deaths = {place.TotalDeaths}
                        />
                    );
                })
            }

        </div>
    );
}

export default CountryCard;