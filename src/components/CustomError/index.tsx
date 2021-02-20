import React from 'react';

import ralphImg from '../../assets/ralph-wiggum.png';
import homerImg from '../../assets/homer-simpson.png';

import { Container } from './styles';

interface CustomErrorProps {
  status: 204 | 500;
}

const CustomError = ({ status }: CustomErrorProps) => {
  return (
    <Container>
      {status === 204 ? (
        <div>
          <h1>Sorry!</h1>
          <p>We did not find any results...</p>
        </div>
      ) : (
        <div>
          <h1>Ooops!</h1>
          <p>Something went wrong...</p>
        </div>
      )}
      <div>
        <img
          src={status === 204 ? homerImg : ralphImg}
          alt={status === 204 ? 'Homer Simpson' : 'Ralph Wiggum'}
        />
      </div>
    </Container>
  );
};

export default CustomError;
