import React, { useCallback, useState, createRef, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import { Container, Menu, SearchBar } from './styles';

const Header = () => {
  const inputRef = createRef<HTMLInputElement>();

  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setInputIsFocused(false);
    setInputValue('');
  }, [location]);

  const handleSearch = useCallback(async () => {
    if (!inputIsFocused) {
      inputRef.current && inputRef.current.focus();
      return setInputIsFocused(true);
    }
    if (inputValue === '') return setInputIsFocused(false);

    history.push({
      pathname: '/search',
      search: `query=${inputValue}`
    });
  }, [inputIsFocused, inputValue, history, inputRef]);

  const handleBackToHome = useCallback(() => {
    setInputIsFocused(false);

    history.push('/');
  }, [history]);

  return (
    <Container>
      <div>
        <Menu>
          <div onClick={handleBackToHome} className="rotate">
            <img src={logoImg} alt="logo" />
          </div>
          <Link to="/" className={inputIsFocused ? 'hidden' : ''}>
            Trendings
          </Link>
        </Menu>
        <SearchBar>
          <input
            ref={inputRef}
            type="text"
            placeholder="Pesquise por um título"
            className={inputIsFocused ? 'focus' : ''}
            value={inputValue}
            onKeyDown={event => event.key === 'Enter' && handleSearch()}
            onChange={event => setInputValue(event.target.value)}
          />
          <button onClick={handleSearch} className="scale">
            <FaSearch color="#EBE7F5" size={24}></FaSearch>
          </button>
        </SearchBar>
      </div>
    </Container>
  );
};

export default Header;
