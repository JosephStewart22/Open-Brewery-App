import React, {Component} from 'react'
import {Card} from 'bootstrap-4-react'
import { render } from '@testing-library/react'

const Brewery = ({brewery}) => {

  return (
      <Card style={{ width: '18rem' }}>
        <Card.Image src={brewery.image} />
        <Card.Body>
          <Card.Title>{brewery.name}, {brewery.brewery_type}</Card.Title>
          <Card.Subtitle mb="2" text="muted">{brewery.state_province}, {brewery.country}</Card.Subtitle>
          <Card.Text><strong>Brewery type: </strong>{brewery.brewery_type}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="#">{brewery.website_url}</Card.Link>
        </Card.Footer>
      </Card>  
  )
}

export default Brewery