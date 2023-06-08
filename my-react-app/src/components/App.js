import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';
import BreweryForm from './BreweryForm';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
const [searchTerm, setSearchTerm] = useState("");
const [breweries, setBreweries] = useState([])

const allBreweries = ("http://localhost:4000/breweries")

  
  const [isDarkMode, setIsDarkMode] = useState("false")

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

  const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
  <div className={isDarkMode ? "light" : "dark"}>
    <BrowserRouter>
      <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setSearchTerm={searchTerm}/>
        <Switch>
          <Route exact path='/breweries'>
              <BreweryContainer breweries={displayedBreweries} onRemoveBrewery={handleRemoveBrewery} handleAddBrewery={handleAddBrewery}/>
          </Route>
          <Route path='/add-brewery' component={BreweryForm} /> 
        </Switch>
    </BrowserRouter>
    </div>
  )
}
  export default App;