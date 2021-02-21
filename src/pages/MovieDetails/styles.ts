import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1440px;

  padding: 24px 16px;

  @media (min-width: 768px) {
    padding: 32px 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;
