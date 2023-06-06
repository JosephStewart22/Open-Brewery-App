import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';

const App = () => {
const [searchTerm, setSearchTerm] = useState("");
const [breweries, setBreweries] = useState([])

const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")

  
  const [isDarkMode, setIsDarkMode] = useState("false")

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(setBreweries)
  }, [])

  const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className={isDarkMode ? "light" : "dark"}>
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setSearchTerm={searchTerm}/>
        <br /><br />
        <BreweryContainer breweries={displayedBreweries} />
    </div>
  )
}
  export default App;