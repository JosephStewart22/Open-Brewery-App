import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navbar from './Navbar';
import BreweryContainer from './BreweryContainer';
import Search from './Search';

const App = () => {

  const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(breweryArray => setBreweries(breweryArray))
  }, [])

  console.log(breweries)

  return (
    <div>
        <Navbar />
        <BreweryContainer />
        <Search />
    </div>
  )
}

export default App