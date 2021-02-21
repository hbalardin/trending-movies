import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import homerImg from '../../assets/homer.png';
import homerDonutImg from '../../assets/homer-donut.png';
import homerDohImg from '../../assets/homer-doh.png';

import { Container, Button } from './styles';

interface Error {
  title: string;
  message: string;
  imageUrl: string;
  alt: string;
}

const CustomError = () => {
  const [error, setError] = useState<Error | null>(null);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const state = location.state;

    const [_, query] = location.search.split('?query=', 2);

    if (state === 204) {
      setError({
        title: 'Sorry!',
        message: `We did not find any results for "${query}"...`,
        imageUrl: homerDohImg,
        alt: 'Homer Simpson'
      });
    } else if (state === 500) {
      setError({
        title: 'Ooops!',
        message: 'Something went wrong...',
        imageUrl: homerDonutImg,
        alt: 'Homer Simpson'
      });
    } else {
      setError({
        title: 'Error 404',
        message: 'Woow! You were not supposed to get this far...',
        imageUrl: homerImg,
        alt: 'Homer Simpson'
      });
    }
  }, [location, history]);

  return (
    <Container>
      <div>
        <div>
          <h1>{error?.title}</h1>
          <p>{error?.message}</p>
        </div>
        <Button onClick={() => history.push('/')} className="scale">
          Go back to Home
        </Button>
      </div>
      <div>
        <img src={error?.imageUrl} alt={error?.alt} />
      </div>
    </Container>
  );
};

export default CustomError;
