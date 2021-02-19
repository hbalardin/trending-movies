import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Menu, SearchBar } from './styles';

const Header = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const handleSearch = useCallback(async () => {
    if (!isFocused) return setIsFocused(true);
    if (inputValue === '') return setIsFocused(false);

    history.push({
      pathname: '/search',
      search: `query=${inputValue}`
    });
  }, [isFocused, inputValue, history]);

  return (
    <Container>
      <nav>
        <Menu>
          <div>
            <Link to="/">
              <img
                src={logoImg}
                alt="logo"
                onClick={() => setIsFocused(false)}
              />
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
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
          />
          <FaSearch color="#EBE7F5" size={24} onClick={handleSearch}></FaSearch>
        </SearchBar>
      </nav>
    </Container>
  );
};

export default Header;
