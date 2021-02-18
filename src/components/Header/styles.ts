import styled from 'styled-components';

export const Container = styled.header`
  nav {
    display: flex;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  div {
     width: 64px;

    img {
       width: 100%;
    }
  }

  ul {
    a {
      text-decoration: none;
    }
  }
`;

export const SearchBar = styled.div`

`;
