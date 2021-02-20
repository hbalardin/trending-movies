import styled, { css } from 'styled-components';

interface ContainerProps {
  imageUrl: string | null;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin: 0 auto;

  ${props =>
    props.imageUrl &&
    css`
      background: url(${props.imageUrl}) center no-repeat;
      background-size: cover;
    `}

  display: flex;
`;

export const MovieCard = styled.div`
  padding: 32px 24px;
  margin: 0 16px;

  background: #230155;
  border-radius: 32px 32px 0 0;

  margin-top: 40vh;

  p {
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1.3;
  }

  @keyframes card {
    0% {
      margin-top: 100vh;
    }
    100% {
      margin-top: 40vh;
    }
  }
  animation: card 2s ease;
`;

export const RatingContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 8px;

  span {
    display: flex;
    align-items: center;

    p {
      margin-left: 4px;
      color: #fbdb56;
      font-family: 'Roboto', sans-serif;
      font-weight: 500;
      font-size: 14px;
    }
  }
`;

export const GenresContainer = styled.div`
  display: flex;

  align-items: center;
  flex-wrap: wrap;

  margin: 8px 0 16px;

  span {
    color: #f62e76;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;

    margin-right: 8px;
  }
`;
