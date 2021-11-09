import React from 'react';
import './Header.css'

const Header = ({searchChange, maxCon, maxConCountry, maxD, maxDCountry, maxPercent, maxPercentCountry}) => {
    return(
        <div>
            <h1>Global Covid-19 Statistics</h1>
            <div className="input">
                <input type="search" placeholder="Search Country" onChange={searchChange}></input>
            </div>
            <div className="stats">
                <div className="confirmed">
                    <h2 className="title">Most Cases</h2>
                    <h2>{maxConCountry}</h2>
                    <h2>{maxCon.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>

                <div className="death">
                    <h2 className="title">Most Deaths</h2>
                    <h2>{maxDCountry}</h2>
                    <h2>{maxD.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
                </div>

                <div className="percent">
                    <h2 className="title">Highest Death Rate</h2>
                    <h2>{maxPercentCountry}</h2>
                    <h2>{(maxPercent*100).toFixed(2)}%</h2>
                </div>
            </div>
            
        </div>
    );
}

export default Header;