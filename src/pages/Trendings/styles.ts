import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin: 0 auto;
  max-width: 1440px;

  padding: 24px 16px;

  display: flex;
  flex-direction: column;
  align-content: center;

  h1 {
    font-size: 2.4rem;
    text-align: center;

    margin-bottom: 24px;
  }

  > div {
    width: 100%;
    display: grid;
    margin: 0 auto;

    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
  }

  @media (min-width: 425px) {
    > div {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    padding: 32px 24px;

    h1 {
      font-size: 3.2rem;

      margin-bottom: 32px;
    }

    > div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 1024px) {
    padding: 32px;

    h1 {
      text-align: left;
    }

    > div {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (min-width: 1440px) {
    > div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
