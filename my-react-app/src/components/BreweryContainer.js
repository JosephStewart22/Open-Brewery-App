import React, {useEffect, useState} from 'react'
import BreweryList from './BreweryList'

const BreweryContainer = ({breweries, onRemoveBrewery}) => {

  return (
    <div>
      <BreweryList breweries={breweries} onRemoveBrewery={onRemoveBrewery}/>
    </div>
  )
}

export default BreweryContainer