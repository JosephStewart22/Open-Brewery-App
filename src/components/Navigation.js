import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon,
  faMagnifyingGlass,
  faPlus
} from '@fortawesome/free-solid-svg-icons';

import './Navigation.css';


const Navigation = ({
  searchTerm,
  onChangeSearch,
  isDarkMode,
  setIsDarkMode,
  setBreweryType
}) => {

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };


  function handleSearch(e) {
    onChangeSearch(e.target.value);
  }


  const handleFilter = (e) => {
    setBreweryType(e);
  };


  return (
    <Navbar
      expand="lg"
      sticky="top"
      className={`brewery-navbar ${
        isDarkMode ? 'navbar-dark-mode' : 'navbar-light-mode'
      }`}
    >

      <Container fluid className="navbar-container">

        {/* BRAND */}

        <LinkContainer to="/breweries">
          <Navbar.Brand className="brewery-brand">

            <div className="brand-icon">
              🍺
            </div>

            <div className="brand-text">
              <span className="brand-name">
                The Brew List
              </span>

              <span className="brand-subtitle">
                Discover your next pour
              </span>
            </div>

          </Navbar.Brand>
        </LinkContainer>


        {/* MOBILE TOGGLE */}

        <Navbar.Toggle aria-controls="brewery-navbar-nav" />


        <Navbar.Collapse id="brewery-navbar-nav">

          <Nav className="brewery-nav-links">

            {/* BREWERIES */}

            <LinkContainer to="/breweries">
              <Nav.Link>
                Breweries
              </Nav.Link>
            </LinkContainer>


            {/* ADD BREWERY */}

            <LinkContainer to="/add-brewery">
              <Nav.Link className="add-brewery-link">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="nav-icon"
                />

                Add Brewery
              </Nav.Link>
            </LinkContainer>


            {/* FILTER */}

            <NavDropdown
              title="Filter"
              id="brewery-filter-dropdown"
              onSelect={handleFilter}
            >

              <NavDropdown.Item eventKey="all">
                All Breweries
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="micro">
                Micro
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="large">
                Large
              </NavDropdown.Item>

              <NavDropdown.Item eventKey="brewpub">
                Brewpub
              </NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="pet_friendly">
                🐕 Pet Friendly
              </NavDropdown.Item>

            </NavDropdown>

          </Nav>


          {/* RIGHT SIDE */}

          <div className="navbar-actions">

            {/* SEARCH */}

            <Form className="brewery-search">

              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-icon"
              />

              <Form.Control
                type="search"
                placeholder="Search breweries..."
                aria-label="Search breweries"
                value={searchTerm || ''}
                onChange={handleSearch}
              />

            </Form>


            {/* DARK MODE */}

            <Button
              variant="link"
              className="theme-toggle"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              title={
                isDarkMode
                  ? 'Switch to light mode'
                  : 'Switch to dark mode'
              }
            >

              <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
              />

            </Button>

          </div>

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
};


export default Navigation;