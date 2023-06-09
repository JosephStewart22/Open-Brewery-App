import React, {useEffect, useState} from 'react'
import BreweryList from './BreweryList'

const BreweryContainer = ({breweries, onRemoveBrewery, isDarkMode}) => {

  return (
    <div>
      <BreweryList breweries={breweries} onRemoveBrewery={onRemoveBrewery} isDarkMode={isDarkMode} />
    </div>
  )
}

export default BreweryContainer