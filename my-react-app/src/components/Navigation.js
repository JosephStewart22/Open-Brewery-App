import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

const Navigation = ({onSearch, isDarkMode, setIsDarkMode}) => {
const [search, setSearch] = useState("");

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode)
}

function handleSearch(e) {
  e.preventDefault()
  onSearch(search)
}
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
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
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-secondary" onClick={toggleDarkMode}>{isDarkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} />}</Button>
          <Form className="d-flex" onSubmit={handleSearch}>
            <Form.Control
              type="search"
              placeholder="Search for a brewery"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default Navigation