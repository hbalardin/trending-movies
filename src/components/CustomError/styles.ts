import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    width: 80%;
    margin-bottom: 16px;
    background: #f62e76;
    border-radius: 16px 0 16px 0;
    padding: 16px 24px;

    @keyframes message {
      0% {
        margin-right: 50vw;
      }
      100% {
        margin-right: 0vw;
      }
    }

    animation: message 1s ease;

    p {
      margin-top: 8px;
    }
  }
  div + div {
    width: 64%;

    @keyframes img {
      0% {
        margin-top: 50vh;
      }
      100% {
        margin-top: 0vh;
      }
    }

    animation: img 1s ease;
  }
`;
