import styled from 'styled-components';

export const Container = styled.header`
  background: #230155;
  border-radius: 0 0 16px 16px;

  nav {
    padding: 8px 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  div {
    height: 64px;

    img {
      height: 100%;
    }
  }

  ul {
    display: none;
    li,
    a {
      margin-left: 8px;
      text-decoration: none;
    }
  }
`;

export const SearchBar = styled.div`
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  max-width: 208px;

  input {
    opacity: 0;
    width: 0;
    margin-right: 8px;
    padding: 4px 8px;

    border-radius: 8px;
    border: 3px solid #ebe7f5;
    background: #fff;

    color: #230155;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    transition: all 0.7s ease;

    &::placeholder {
      color: #3d0271;
    }

    &.focus {
      width: 100%;
      opacity: 100%;
    }
  }
`;
