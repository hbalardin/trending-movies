import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import MovieDetailsProps from '../../components/DetailsCard/interface';

import { Container } from './styles';

import api from '../../services/api';
import DetailsCard from '../../components/DetailsCard';
import { format, parseISO } from 'date-fns';

interface Params {
  id: string;
}

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);

  const history = useHistory();
  const { id } = useParams<Params>();

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadData = async () => {
      try {
        const response = await api.get<MovieDetailsProps>(`/movie/${id}`, {
          params: {
            api_key: 'b9a162a4975820acf517003c0ae2c2d2'
          }
        });

        const parsedDate = response.data.release_date
          ? format(parseISO(response.data.release_date), 'MMMM d, Y')
          : null;

        const parsedVoteAverage =
          String(response.data.vote_average).length === 1
            ? response.data.vote_average + '.0'
            : String(response.data.vote_average);

        const parsedMovie: MovieDetailsProps = {
          ...response.data,
          release_date: parsedDate,
          parsedVoteAverage,
          image: response.data.poster_path
            ? `https://image.tmdb.org/t/p/w500${response.data.poster_path}`
            : null
        };

        setMovie(parsedMovie);
      } catch (error) {
        history.push('/oops', 500);
      }
    };

    loadData();
  }, [history, id]);

  return (
    <Container>{!!movie && <DetailsCard data={movie}></DetailsCard>}</Container>
  );
};

export default MovieDetails;
