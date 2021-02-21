import styled from 'styled-components';

interface ImageContainerProps {
  imageUrl: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  display: flex;
  flex-direction: column;

  background: #431d7c;
  border-radius: 16px 4px 16px 4px;

  animation: card ease 1s;
  @keyframes card {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: 0vw;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 100%;
  min-height: 500px;
  height: 50%;

  border-radius: 16px 4px 16px 4px;

  background: url(${props => props.imageUrl}) no-repeat center;
  background-size: cover;

  padding: 24px 16px;

  button {
    width: 48px;
    height: 48px;
    border: 0;
    background: #431d7c;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.5s ease;

    &:hover {
      background: #2c1254;
    }
  }

  @media (min-width: 768px) {
    padding: 32px 24px;
    height: 100%;
    max-width: 45%;
  }
`;

export const Content = styled.div`
  background: #431d7c;
  border-radius: 16px 4px 16px 4px;
  margin-top: -20%;

  padding: 24px 16px;

  @media (min-width: 425px) {
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    flex: 1;
    padding: 32px 24px;
    max-width: 480px;
  }

  @media (min-width: 1024px) {
    max-width: 1080px;
  }
`;

export const Title = styled.strong`
  display: block;
  font-size: 2.4rem;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }

  @media (min-width: 1024px) {
    font-size: 3.6rem;
  }
`;

export const Average = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    p {
      color: #fbdb56;
      margin-right: 4px;
      font-size: 1.6rem;
      font-weight: 500;
    }
  }

  > p {
    margin-left: 8px;
    font-size: 1.4rem;
    font-weight: 300;
  }

  @media (min-width: 768px) {
    div {
      p {
        font-size: 1.8rem;
      }
    }
    p {
      font-size: 1.8rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0 8px;

  > span {
    display: flex;
    align-items: center;

    p {
      margin-left: 8px;
      font-size: 1.4rem;
    }
  }

  @media (min-width: 425px) {
    gap: 0 16px;
  }

  @media (min-width: 768px) {
    span {
      p {
        font-size: 1.8rem;
      }
    }
  }
`;

export const GenresContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 16px;

  span {
    background: #f62e76;
    border-radius: 16px 4px 16px 4px;
    color: #ebe7f5;
    padding: 8px 16px;

    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.4rem;
  }

  @media (min-width: 768px) {
    margin: 24px 0 32px;
    span {
      font-size: 1.6rem;
      padding: 12px 20px;
    }
  }
`;

export const OverviewContainer = styled.div`
  margin-top: 24px;

  h4 {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    line-height: 1.4;
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1.6rem;
    }
  }

  @media (min-width: 1024px) {
    h4 {
      font-size: 2.4rem;
    }

    > p {
      font-size: 1.8rem;
    }
  }
`;
