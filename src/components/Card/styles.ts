import styled, { css } from 'styled-components';

interface AverageProps {
  backgroundColor: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;

  background: #230155;
  border-radius: 8px;

  &:hover {
    transform: translate3d(16px, 0, 0);
    transition: all ease 500ms;
  }

  animation: message ease 1s;
  @keyframes message {
    0% {
      margin-left: 100vw;
    }
    100% {
      margin-left: 0vw;
    }
  }

  @media (min-width: 768px) {
    max-width: 256px;
    flex-direction: column;

    &:hover {
      transform: translate3d(0, -16px, 0);
    }
  }
`;

export const ImageContainer = styled.div`
  width: 35%;
  border-radius: 8px;

  align-self: center;

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  padding: 8px;
  margin-left: 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  > div {
    > div {
      p {
        margin-left: 4px;
        font-size: 14px;
        font-weight: 300;
      }

      display: flex;
      align-items: center;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 768px) {
    padding: 16px;
  }
`;

export const Title = styled.strong`
  font-size: 16px;
  margin-bottom: 16px;
`;

export const Average = styled.span<AverageProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 12px 16px;

  border-radius: 8px;

  ${props =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}

  p {
    margin-left: 8px;
    font-weight: 600;
    color: #1e073f;
    font-size: 16px;
  }

  @media (min-width: 768px) {
    position: static;
    align-self: flex-start;
    width: 100%;
  }
`;
