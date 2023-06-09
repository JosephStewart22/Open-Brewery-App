import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


const Navigation = ({ searchTerm, onChangeSearch, isDarkMode, setIsDarkMode, setBreweryType}) => {

const toggleDarkMode = (e) => {
  e.preventDefault()
  setIsDarkMode(!isDarkMode)
}

function handleSearch(e) {
  e.preventDefault()
  onChangeSearch(e.target.value)
}

const handleFilter = (e) => {
  setBreweryType(e)
}

  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container fluid>
        <LinkContainer to='/breweries'>
            <Navbar.Brand href="#">The Brew List</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to='/add-brewery'>
                <Nav.Link href="">Add Brewery</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Filter by Type" id="navbarScrollingDropdown" onSelect={handleFilter}>
            <NavDropdown.Item eventKey='all'>
                  All
            </NavDropdown.Item>
                <NavDropdown.Item eventKey='micro'>
                  Micro
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='nano'>
                  Nano
                </NavDropdown.Item>
                <NavDropdown.Item eventKey='pub'>
                  BrewPub
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey='pet_friendly'>
                Pet Friendly
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
          <Button variant="outline-secondary" onClick={toggleDarkMode} className='me-2'>{isDarkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} />}</Button>
          <Form className="d-flex" >
            <Form.Control
              type="search"
              placeholder="Search for a brewery"
              className="me-2"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default Navigation