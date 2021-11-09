import React from 'react';
import './App.css';
import CountryCard from './CountryCard';
import Header from './Header';


class App extends React.Component {

  constructor(){
    super()
    this.state = {
      items: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://api.covid19api.com/summary')
    .then(response => {
      return response.json();
    })
    .then(countries => {
      this.setState({items: countries.Countries})
    })
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value});
  }
  

  render(){
      const filtered = this.state.items.filter(items =>{
        return items.Country.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });

      let maxConfirmed = 0;
      let maxConfirmedCountry = '';
      this.state.items.forEach(e => {
      if(e.TotalConfirmed > maxConfirmed){
        maxConfirmed = e.TotalConfirmed;
        maxConfirmedCountry = e.Country;
      }
    })
    
    let maxDeath = 0;
      let maxDeathCountry = '';
      this.state.items.forEach(e => {
      if(e.TotalDeaths > maxDeath){
        maxDeath = e.TotalDeaths;
        maxDeathCountry = e.Country;
      }
    })

    let maxPer = 0;
      let maxPerCountry = '';
      this.state.items.forEach(e => {
      if((e.TotalDeaths/e.TotalConfirmed) > maxPer){
        maxPer = e.TotalDeaths/e.TotalConfirmed;
        maxPerCountry = e.Country;
      }
    })

    return(
      <div>
        <Header searchChange={this.onSearchChange} 
        maxCon={maxConfirmed} maxConCountry={maxConfirmedCountry}
        maxD={maxDeath} maxDCountry={maxDeathCountry}
        maxPercent={maxPer} maxPercentCountry={maxPerCountry}
        />
        <CountryCard countries={filtered} />
      </div>
    );
    
  }
}


export default App;







