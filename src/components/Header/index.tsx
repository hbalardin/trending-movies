import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Menu, SearchBar } from './styles';

const Header = () => {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();

  const handleSearch = useCallback(async () => {
    if (!inputIsFocused) return setInputIsFocused(true);
    if (inputValue === '') return setInputIsFocused(false);

    history.push({
      pathname: '/search',
      search: `query=${inputValue}`
    });
  }, [inputIsFocused, inputValue, history]);

  return (
    <Container>
      <Menu>
        <div>
          <Link to="/">
            <img
              src={logoImg}
              alt="logo"
              onClick={() => setInputIsFocused(false)}
            />
          </Link>
        </div>
        <Link to="/" className={inputIsFocused ? 'hidden' : ''}>
          Trendings
        </Link>
      </Menu>
      <SearchBar>
        <input
          type="text"
          placeholder="Pesquise por um título"
          className={inputIsFocused ? 'focus' : ''}
          value={inputValue}
          onKeyDown={event => event.key === 'Enter' && handleSearch()}
          onChange={event => setInputValue(event.target.value)}
        />
        <div>
          <FaSearch color="#EBE7F5" size={24} onClick={handleSearch}></FaSearch>
        </div>
      </SearchBar>
    </Container>
  );
};

export default Header;
