import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Movie from '../../components/Card/interface';
import CustomError from '../../components/CustomError';

import api from '../../services/api';

import { Container } from './styles';

const SearchResults = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const [errorStatus, setErrorStatus] = useState<204 | 500 | null>(null);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setErrorStatus(null);
    const [_, query] = location.search.split('?query=', 2);

    const handleSearch = async () => {
      try {
        setMovies([]);
        const response = await api.get('/search/movie', {
          params: {
            api_key: 'b9a162a4975820acf517003c0ae2c2d2',
            query,
            include_adult: true
          }
        });

        if (response.data.total_results === 0) {
          throw new Error('no results');
        }

        const sortedMovies = response.data.results.sort((a: Movie, b: Movie) =>
          a.vote_average > b.vote_average ? -1 : 1
        );

        const parsedMovies = sortedMovies.map((movie: Movie) => {
          const parsedDate = movie.release_date
            ? format(parseISO(movie.release_date), 'MMMM d, Y')
            : null;

          const parsedMovie = {
            ...movie,
            release_date: parsedDate,
            image: movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : null
          };

          return parsedMovie;
        });

        setMovies(parsedMovies);
      } catch (error) {
        if (error.message === 'no results') {
          return setErrorStatus(204);
        }
        setErrorStatus(500);
        console.error(error.message);
      }
    };

    handleSearch();
  }, [history, location]);
  return (
    <>
      <Header />
      <Container>
        {!!errorStatus && <CustomError status={errorStatus} />}
        {!!movies &&
          movies.map(movie => (
            <Card
              data={movie}
              key={movie.id}
              onClick={() => history.push(`/movies/${movie.id}`, movie)}></Card>
          ))}
      </Container>
    </>
  );
};

export default SearchResults;
