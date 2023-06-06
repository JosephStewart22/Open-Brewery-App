import React from 'react'
import { Button } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { render } from '@testing-library/react'

const Brewery = ({brewery}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={brewery.image} />
      <Card.Body>
        <Card.Title><a href={brewery.website_url}>{brewery.name}</a></Card.Title>
        <Card.Text>
          {brewery.city}, {brewery.state}
        </Card.Text>
        <Button variant="outline-primary">Pet Friendly?</Button>
        <Button variant="outline-secondary">Delete</Button>
      </Card.Body>
    </Card>  )
}

export default Brewery