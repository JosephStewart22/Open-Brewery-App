import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const BreweryForm = ({onAddBrewery}) => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    city: "", 
    state: "",
    thumbnail: "",
    address: "",
    postal_code: "",
    country: "",
    website_url: "",
    phone: "",
  })

function handleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

function handleSubmit(e) {
  e.preventDefault()
  const newBrewery = {
    image: formData.image,
    name: formData.name,
    city: formData.city,
    state: formData.state,
    thumbnail: formData.thumbnail,
    address: formData.address,
    postal_code: formData.postal_code,
    country: formData.country,
    website_url: formData.website_url,
    phone: formData.phone,
  }

  fetch("http://localhost:4000/breweries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBrewery)
  })
  .then(r => r.json())
  .then(onAddBrewery)
}

  return (
    <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}
                  className='m-auto'>
      <h4>Don't see a brewery? Add it!</h4>
      <Form id='brewery-form' onSubmit={handleSubmit}>
      <h4>Don't see a 🍻 brewery? Add it!</h4>
      <Form id='brewery-form'>
      <Form.Group>
          <Form.Label>Brewery name:</Form.Label>
          <Form.Control name="name" type="text" 
                        placeholder="Enter brewery name" value={formData.name} onChange={handleChange}/>
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
          <Form.Control name="address" type="text" placeholder="Enter address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>City:</Form.Label>
          <Form.Control name="city" type="text" placeholder="Enter city" value={formData.city} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>State:</Form.Label>
          <Form.Control name="state" type="text" placeholder="Enter state" value={formData.state} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Postal code:</Form.Label>
          <Form.Control name="postal_code" type="text" placeholder="Enter postal code" value={formData.postal_code} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Country:</Form.Label>
          <Form.Control name="country" type="text" placeholder="Enter country" value={formData.country} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone number:</Form.Label>
          <Form.Control name="phone" type="number" placeholder="Enter phone number" value={formData.phone} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Website:</Form.Label>
          <Form.Control name="website_url" type="text" placeholder="Enter URL" value={formData.website_url} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
           Add brewery
        </Button>
      </Form>
      </Form>
    </div>  
    )
}

export default BreweryForm