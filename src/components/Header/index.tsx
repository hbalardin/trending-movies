import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import { Container, Menu, SearchBar } from './styles';

const Header = () => {
  return <Container>
    <nav>
      <Menu>
        <div>
          <Link to="/"><img src={logoImg} alt="logo"/></Link>
        </div>
        <ul>
          <li><Link to="/">Trendings</Link></li>
        </ul>
      </Menu>
      <SearchBar></SearchBar>
    </nav>
  </Container>;
}

export default Header;
