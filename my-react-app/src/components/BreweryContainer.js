import React, {useEffect, useState} from 'react'
import BreweryList from './BreweryList'

const BreweryContainer = () => {

  const allBreweries = ("https://api.openbrewerydb.org/v1/breweries")

  const [breweries, setBreweries] = useState([])

  useEffect(() => {
    fetch(allBreweries)
      .then(res => res.json())
      .then(breweryArray => setBreweries(breweryArray))
  }, [])

  return (
    <div>
      <BreweryList breweries={breweries} setBreweries={setBreweries} />
    </div>
  )
}

export default BreweryContainer