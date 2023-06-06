import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';

const App = () => {
const [search, setSearch] = useState("");

const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(breweryArray => setBreweries(breweryArray))
  }, [])
const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <Navigation onSearch={(setSearch)}/>
        <BreweryContainer breweries={displayedBreweries}/>
    </div>
  )
}

export default App