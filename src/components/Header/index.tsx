import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Menu, SearchBar } from './styles';

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback(() => {
    if (!isFocused) return setIsFocused(true);
    return setIsFocused(false);
  }, [isFocused]);

  return (
    <Container>
      <nav>
        <Menu>
          <div>
            <Link to="/">
              <img src={logoImg} alt="logo" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Trendings</Link>
            </li>
          </ul>
        </Menu>
        <SearchBar>
          <input
            type="text"
            placeholder="Pesquise por um título"
            className={isFocused ? 'focus' : ''}
          />
          <FaSearch color="#EBE7F5" size={24} onClick={handleSearch}></FaSearch>
        </SearchBar>
      </nav>
    </Container>
  );
};

export default Header;
