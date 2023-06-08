import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BreweryForm = () => {
  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}
                  className='m-auto'>
      <h4>Don't see a 🍻 brewery? Add it!</h4>
      <Form id='brewery-form'>
      <Form.Group>
          <Form.Label>Brewery name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter brewery name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Brewery type:</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select brewery type</option>
              <option value="1">Micro</option>
              <option value="2">Nano</option>
              <option value="3">Regional</option>
              <option value="4">Brewpub</option>
              <option value="5">Large</option>
              <option value="6">Planning</option>
              <option value="7">Bar</option>
              <option value="8">Contract</option>
              <option value="9">Proprietor</option>
              <option value="10">Closed</option>
           </Form.Select>        
       </Form.Group>
       <Form.Group>
          <Form.Check 
            type='checkbox'
            name='pet-friendly'
            id='pet-friendly'
            label="🐶 Pet-Friendly?"
          />
       </Form.Group>
        <Form.Group>
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>City:</Form.Label>
          <Form.Control type="text" placeholder="Enter city" />
        </Form.Group>
        <Form.Group>
          <Form.Label>State:</Form.Label>
          <Form.Control type="text" placeholder="Enter state" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Postal code:</Form.Label>
          <Form.Control type="text" placeholder="Enter postal code" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control type="text" placeholder="Enter country" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number:</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Website:</Form.Label>
          <Form.Control type="text" placeholder="Enter URL" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Add brewery
        </Button>
      </Form>
    </div>  
    )
}

export default BreweryForm