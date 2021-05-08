import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className='nav-link' to='/home'>
          Home
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/add-players'>
          Add Player
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/team'>
          Team
        </Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/home'>TSSports</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            {user && authenticated()}
            {user !== null && (
              <NavItem>
                {user ? (
                  <Button color='danger' onClick={signOutUser}>
                    Sign Out
                  </Button>
                ) : (
                  <Button color='info' onClick={signInUser}>
                    Sign In
                  </Button>
                )}
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
