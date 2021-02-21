import styled from 'styled-components';

interface ImageContainerProps {
  imageUrl: string;
}

interface AverageProps {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 192px;

  display: flex;

  background: #431d7c;
  border-radius: 16px 4px 16px 4px;

  &:hover {
    cursor: pointer;
  }

  animation: card ease 1s;
  @keyframes card {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: 0vw;
    }
  }

  @media (min-width: 425px) {
    flex-direction: column;
    height: 420px;

    animation: card ease 1.5s;
    @keyframes card {
      0% {
        margin-top: 100vh;
      }
      100% {
        margin-top: 0vh;
      }
    }
  }

  @media (min-width: 1024px) {
    height: 540px;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  width: 40%;
  height: 100%;

  border-radius: 16px 4px 16px 4px;

  background: url(${props => props.imageUrl}) no-repeat;
  background-size: cover;

  @media (min-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  padding: 8px;
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  @media (min-width: 425px) {
    margin: 0;
    padding: 16px 8px;
    min-height: 45%;
  }

  @media (min-width: 1024px) {
    min-height: 35%;
  }
`;

export const Title = styled.strong`
  display: block;
  font-size: 2rem;
`;

export const Info = styled.div`
  > div {
    & + div {
      margin-top: 8px;
    }

    p {
      margin-left: 4px;
      font-size: 1.4rem;
      font-weight: 300;
    }

    display: flex;
    align-items: center;
  }
`;

export const Average = styled.span<AverageProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${props => props.backgroundColor};
  border-radius: 8px;

  padding: 8px 12px;

  p {
    margin-left: 8px;
    font-weight: 600;
    color: #2c1254;
    font-size: 1.6rem;
  }

  align-self: flex-start;
  max-width: 80px;

  &:hover {
    width: 100%;
    max-width: 100%;

    transition: 1s ease;
  }
`;
