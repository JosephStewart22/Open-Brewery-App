import React, {useEffect, useState } from 'react';
import style from './style.css';
import Navigation from './Navigation';
import BreweryContainer from './BreweryContainer';
import BreweryForm from './BreweryForm';
import { Switch, Route } from 'react-router-dom';


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

  const displayedBreweries = breweries.filter((brewery) => brewery.name.toLowerCase().includes(searchTerm.toLowerCase()))
  return (
    <div className={isDarkMode ? "light" : "dark"}>
        <Navigation isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} setSearchTerm={searchTerm}/>
        <br /><br />
        <Switch>
        <Route 
          path='/breweries'
          render={() => <BreweryContainer breweries={displayedBreweries} /> }
          />        
        <Route 
          path='/add-brewery'
          render={() => <BreweryForm /> }
          />
        </Switch>
    </div>
  )
}
  export default App;