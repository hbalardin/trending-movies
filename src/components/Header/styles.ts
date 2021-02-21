import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  border-radius: 0 0 16px 0;
  background: #431d7c;

  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    height: 96px;
    padding: 8px 24px;
  }

  @media (min-width: 1024px) {
    padding: 8px 32px;
  }
`;

export const Menu = styled.div`
  height: 100%;

  display: flex;
  align-items: center;

  margin-right: 16px;

  div {
    height: 100%;
    img {
      height: 100%;
    }

    &:hover {
      @keyframes rotate {
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(-10deg);
        }
        75% {
          transform: rotate(10deg);
        }
        100% {
          transform: rotate(0deg);
        }
      }

      animation: rotate 1s ease;
    }
  }

  > a {
    padding: 8px;
    margin-left: 8px;

    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;

    &.hidden {
      display: none;
    }

    position: relative;
    transition: 0.7s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 4px;
      background-color: #f62e76;
      height: 2px;
      width: 0;
    }

    &:hover {
      color: #f62e76;

      &::after {
        transition: 0.7s ease;
        width: 100%;
      }
    }
  }

  @media (min-width: 425px) {
    a.hidden {
      display: initial;
    }
  }

  @media (min-width: 768px) {
    a {
      margin-left: 16px;
      font-size: 1.8rem;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  input {
    width: 0;
    max-width: 360px;
    margin-right: 16px;
    padding: 4px 8px;

    border-radius: 8px;
    border: 3px solid #ebe7f5;
    background: #fff;

    color: #2c1254;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;

    &::placeholder {
      color: #3d0271;
    }

    transition: ease 1s;
    opacity: 0;

    &.focus {
      opacity: 1;
      width: 100%;
    }
  }

  button {
    padding: 8px;
    background: transparent;
    border: 0;
  }

  @media (min-width: 768px) {
    input {
      padding: 8px 16px;
    }

    min-width: 50%;
  }
`;
