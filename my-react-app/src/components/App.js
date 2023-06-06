import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';

const App = () => {
const [search, setSearch] = useState("");

<<<<<<< HEAD
const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")
=======
  const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")
>>>>>>> 0dd5d2800c7f9d683ddff7f2e866dde037ee1b2c

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(breweryArray => setBreweries(breweryArray))
  }, [])
<<<<<<< HEAD
const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
        <Navigation onSearch={(setSearch)}/>
        <BreweryContainer breweries={displayedBreweries}/>
=======

  return (
    <div>
        <Navigation />
        <BreweryContainer breweries={breweries} />
>>>>>>> 0dd5d2800c7f9d683ddff7f2e866dde037ee1b2c
    </div>
  )
}

export default App