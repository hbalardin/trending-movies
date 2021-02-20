import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  border-radius: 0 0 16px 16px;
  background: #230155;

  padding: 8px 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  div {
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

    a {
      img {
        width: 64px;
        object-fit: contain;
      }
    }
  }

  > a {
    &.hidden {
      display: none;
    }

    margin-left: 16px;
    text-decoration: none;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      transform: translate3d(0, -2px, 0);
      color: #f62e76;
      transition: 0.6s ease;
    }
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;

  div:hover {
    transform: scale(1.2);
  }

  input {
    opacity: 0;
    width: 0;
    margin-right: 16px;
    padding: 4px 8px;

    border-radius: 8px;
    border: 3px solid #ebe7f5;
    background: #fff;

    color: #230155;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;

    transition: 0.7s ease;

    &::placeholder {
      color: #3d0271;
    }

    &.focus {
      opacity: 1;
      width: 100%;
      opacity: 100%;
    }
  }
`;
