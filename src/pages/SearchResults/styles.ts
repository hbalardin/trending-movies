import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin: 0 auto;

  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
