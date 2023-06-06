import React, {Component} from 'react'
import Brewery from './Brewery'

const BreweryList = ({breweries}) => {

  const renderAllBrewery = breweries.map((brewery) => {
    return <Brewery brewery={brewery} key={brewery.id}/>
  })
  return (
     <div className='list'>
        {renderAllBrewery}
     </div>  
  )
}

export default BreweryList