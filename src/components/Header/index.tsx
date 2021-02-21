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

  const handleBackToHome = useCallback(() => {
    setInputIsFocused(false);

    history.push('/');
  }, [history]);

  return (
    <Container>
      <Menu>
        <div onClick={handleBackToHome}>
          <img src={logoImg} alt="logo" />
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
        <button onClick={handleSearch} className="grow">
          <FaSearch color="#EBE7F5" size={24}></FaSearch>
        </button>
      </SearchBar>
    </Container>
  );
};

export default Header;
