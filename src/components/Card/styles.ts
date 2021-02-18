import styled, { css } from 'styled-components';

interface AverageProps {
  backgroundColor: string;
}

export const Container = styled.div`
  display: flex;
  padding: 8px;

  background: #3d0271;
  border-radius: 8px;
`;

export const ImageContainer = styled.div`
  align-self: center;
  & {
    width: 88px;
    border-radius: 8px;
  }
  img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  margin-left: 16px;
  padding: 8px 0;

  flex: 1;

  display: flex;
  flex-direction: column;

  position: relative;

  strong {
    font-size: 20px;
    margin-bottom: 16px;
  }

  > div {
    display: flex;
    align-items: center;

    & + div {
      margin-top: 8px;
      margin-bottom: 24px;
      p {
        margin-left: 4px;
        font-size: 12px;
      }
    }

    p {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 300;
    }
  }
`;

export const Average = styled.span<AverageProps>`
  display: flex;
  align-items: center;

  align-self: flex-end;

  padding: 12px 24px 12px 20px;

  border-radius: 8px;

  position: absolute;
  bottom: -12%;

  ${props =>
    props.backgroundColor &&
    css`
      background: ${props.backgroundColor};
    `}

  p {
    margin-left: 8px;
    font-weight: 600;
    color: #030202;
    font-size: 16px;
  }
`;
