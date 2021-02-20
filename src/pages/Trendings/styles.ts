import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 24px 16px;

  display: flex;
  flex-direction: column;

  @media (min-width: 425px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
