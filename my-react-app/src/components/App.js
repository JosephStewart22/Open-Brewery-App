import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';

const App = () => {
const [search, setSearch] = useState("");

const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")

  const [breweries, setBreweries] = useState([])

  const [isDarkMode, setIsDarkMode] = useState("false")

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(breweryArray => setBreweries(breweryArray))
  }, [])

  const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div className={isDarkMode ? "light" : "dark"}>
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} onSearch={(setSearch)}/>
        <br /><br />
        <BreweryContainer breweries={displayedBreweries} />
    </div>
  )
}

export default App