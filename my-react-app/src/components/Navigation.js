import React from 'react'
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const Navigation = ({searchTerm, onSetSearch}) => {


function handleSearch(e) {
  e.preventDefault()
  onSetSearch(e.target.value)
}
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">The Brew List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Filter by Type" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Micro</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Large
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                BrewPub
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
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