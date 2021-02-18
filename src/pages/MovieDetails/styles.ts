import styled from 'styled-components';

interface ContainerProps {
  imageUrl: string | null;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  min-height: calc(100vh - 80px);
  margin: 0 auto;

  background: ${props => (props.imageUrl ? `url(${props.imageUrl})` : 'red')};
  background-size: contain;

  display: flex;
  flex: 1;
`;

export const MovieCard = styled.div`
  background: #230155;
  padding: 32px 24px;
  border-radius: 32px 32px 0 0;
  margin: 0 16px;

  margin-top: 320px;

  p {
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 1.3;
  }

  @keyframes card {
    0% {
      margin-top: 420px;
    }
    100% {
      margin-top: 320px;
    }
  }
  & {
    animation: card 2s ease;
  }
`;

export const RatingContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin-top: 8px;

  span {
    color: #fbdb56;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 16px;
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
