import React from 'react'
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

<<<<<<< HEAD

const Navigation = ({searchTerm, onSetSearch}) => {

=======
const Navigation = ({onSearch, isDarkMode, setIsDarkMode}) => {
const [search, setSearch] = useState("");
>>>>>>> 409eca98f8b8e8b272a7baa776fe2eab5bbe4802

const toggleDarkMode = () => {
  setIsDarkMode(!isDarkMode)
}

function handleSearch(e) {
  e.preventDefault()
  onSetSearch(e.target.value)
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
<<<<<<< HEAD
          <Form className="d-flex" >
=======
          <Button variant="outline-secondary" onClick={toggleDarkMode} className='me-2'>{isDarkMode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon} />}</Button>
          <Form className="d-flex" onSubmit={handleSearch}>
>>>>>>> 409eca98f8b8e8b272a7baa776fe2eab5bbe4802
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