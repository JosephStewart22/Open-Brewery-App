import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';
import BreweryForm from './BreweryForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
const [searchTerm, setSearchTerm] = useState("");
const [breweries, setBreweries] = useState([])

const allBreweries = ("http://localhost:4000/breweries")
  
  const [isDarkMode, setIsDarkMode] = useState("false")
  const [breweryType, setBreweryType] = useState("all")

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(setBreweries)
  }, [])
  function handleAddBrewery(newBrewery) {
    setBreweries([...breweries, newBrewery])
  }
  function handleRemoveBrewery(id) {
    const unaddBreweries = breweries.filter((brewery) => brewery.id !== id);
    setBreweries(unaddBreweries)
  }

  const breweryTypeResult = () => {
    if (breweryType === "pet_friendly") {
      return breweries.filter((brewery) => {
        return brewery.pet_friendly == true
      })
    }
    else if (breweryType !== "all") {
      return breweries.filter((brewery) => {
        console.log(brewery.brewery_type, breweryType)
        return brewery.brewery_type === breweryType
      })
      } else {
    return breweries
  }
  }

  const displayedBreweries = breweryTypeResult().filter((brewery) => brewery.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
  <div className={isDarkMode ? "light" : "dark"}>
    <BrowserRouter>
      <Navigation
  breweries={breweries}
  searchTerm={searchTerm}
  isDarkMode={isDarkMode}
  setIsDarkMode={setIsDarkMode}
  onChangeSearch={setSearchTerm}
  breweryType={breweryType}
  setBreweryType={setBreweryType}
/>
      <br /><br />
        <Routes>
  <Route
    path="/breweries"
    element={
      <BreweryContainer
        breweries={displayedBreweries}
        onRemoveBrewery={handleRemoveBrewery}
        onAddBrewery={handleAddBrewery}
        isDarkMode={isDarkMode}
      />
    }
  />

  <Route
    path="/add-brewery"
    element={
      <BreweryForm
        onAddBrewery={handleAddBrewery}
      />
    }
  />
</Routes>
    </BrowserRouter>
    </div>
  )
}
  export default App;