import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 24px 16px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 8px;

    div {
      margin-bottom: 16px;
      h1 {
        font-size: 2.4rem;

        margin-bottom: 8px;
      }
    }
  }
  div + div {
    width: 50%;

    img {
      width: 100%;
    }
  }

  @media (min-width: 425px) {
    padding: 32px 24px;

    > div:first-child {
      div {
        margin-bottom: 32px;
        h1 {
          font-size: 3.2rem;
        }

        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    padding: 32px 24px;

    flex-direction: row;
    justify-content: center;

    > div:first-child {
      margin-top: 0;
      margin-right: 24px;
      div {
        margin-bottom: 32px;
        align-items: flex-start;

        h1 {
          font-size: 4rem;
        }

        p {
          font-size: 2.4rem;
        }
      }
    }
    div + div {
      width: 40%;
      align-self: center;
    }
  }

  @media (min-width: 1024px) {
    padding: 32px;

    div + div {
      width: 35%;
    }
  }

  @media (min-width: 1440px) {
    > div:first-child {
      div {
        h1 {
          font-size: 4.8rem;
        }

        p {
          font-size: 2.8rem;
        }
      }
    }

    div + div {
      width: 30%;
    }
  }

  @media (min-width: 1920px) {
    > div:first-child {
      div {
        h1 {
          font-size: 5.6rem;
        }

        p {
          font-size: 3.2rem;
        }
      }
    }
  }
  div + div {
    width: 25%;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 256px;

  padding: 16px 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #f62e76;
  border-radius: 8px;
  border: 0;

  font-weight: 600;
  font-size: 1.6rem;

  @media (min-width: 768px) {
    max-width: 296px;
    align-self: flex-start;
    font-size: 2rem;

    padding: 24px 16px;
  }

  @media (min-width: 1440px) {
    font-size: 2.4rem;
  }

  @media (min-width: 1920px) {
    font-size: 2.8rem;
  }
`;
