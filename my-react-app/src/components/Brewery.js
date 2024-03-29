import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { render } from '@testing-library/react'

const Brewery = ({brewery, isDarkMode, onRemoveBrewery, id}) => {

  function handleDelete() {
    fetch(`http://localhost:4000/breweries/${brewery.id}`, {
      method: "DELETE",
    })
    onRemoveBrewery(brewery.id)
  }

  const patchBrewery = () => {
    const patchBreweryObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({pet_friendly: true})
    }
    fetch(`http://localhost:4000/breweries/${brewery.id}`, patchBreweryObj)
      .then((res) => res.json())
      .then((updatedBrewery) => {
        console.log(updatedBrewery)
      })
  }

  return (
    <Card bg={isDarkMode ? null : 'dark' } border={isDarkMode ? 'dark' : 'light'} id="brewery-card" style={{ width: '18rem' }} className='m-3'>
      <Card.Img id="card-img" variant="top" src={brewery.image} />
      <Card.Body>
        <Card.Title className={isDarkMode ? 'text-dark' : 'text-light'}><a href={brewery.website_url}>{brewery.name}</a></Card.Title>
        <Card.Text className={isDarkMode ? 'text-dark' : 'text-light'}>
          {brewery.city}, {brewery.state}
        </Card.Text>
        <Button variant={brewery.pet_friendly === true ? 'outline-success' : "outline-primary"} className='me-2' onClick={patchBrewery}>{brewery.pet_friendly === true ? "🐶 ✅" : "Click if Pet Friendly"}</Button>
        <Button variant="outline-danger" className='me-2'onClick={handleDelete}>Delete</Button>
      </Card.Body>
    </Card>  )
}

export default Brewery