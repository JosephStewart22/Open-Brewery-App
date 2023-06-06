import React, {useEffect, useState} from 'react'
import BreweryList from './BreweryList'

const BreweryContainer = ({breweries}) => {

  return (
    <div>
      <BreweryList breweries={breweries} />
    </div>
  )
}

export default BreweryContainer