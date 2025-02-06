import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './Button';

const Nav = styled.nav`
  background: white;
  padding: 1.25rem 1rem;
  box-shadow: ${props => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 50px;
    width: auto;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const NavButton = styled(Button)`
  background: ${props => props.theme.colors.accent};
  border-color: ${props => props.theme.colors.accent};
  padding: 0.75rem 1.5rem;
  font-weight: 600;

  &:hover {
    background: ${props => props.theme.colors.earth.brown};
    border-color: ${props => props.theme.colors.earth.brown};
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <img src="/assets/logo.png" alt="Behavior School" />
        </Logo>
        <NavLinks>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/knowledge-base">Knowledge Base</NavLink>
          <NavButton as={Link} to="/book-call">Book a Call</NavButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar;
