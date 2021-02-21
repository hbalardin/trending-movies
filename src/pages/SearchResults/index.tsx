import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import Card from '../../components/Card';
import Movie from '../../components/Card/interface';

import api from '../../services/api';

import { Container } from './styles';

const SearchResults = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();
  const location = useLocation();

  const handleError = useCallback(
    (query?: string) => {
      query
        ? history.push({
            pathname: '/oops',
            search: `query=${query}`,
            state: 204
          })
        : history.push('/oops', 500);
    },
    [history]
  );

  useEffect(() => {
    setLoading(true);
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
          return handleError(query);
        }

        const sortedMovies = response.data.results.sort((a: Movie, b: Movie) =>
          a.vote_average > b.vote_average ? -1 : 1
        );

        const parsedMovies = sortedMovies.map((movie: Movie) => {
          const parsedDate = movie.release_date
            ? format(parseISO(movie.release_date), 'MMMM d, Y')
            : null;

          const parsedVoteAverage =
            String(movie.vote_average).length === 1
              ? movie.vote_average + '.0'
              : String(movie.vote_average);

          const parsedMovie = {
            ...movie,
            release_date: parsedDate,
            parsedVoteAverage,
            image: movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : null
          };

          return parsedMovie;
        });

        setLoading(false);
        setMovies(parsedMovies);
      } catch (error) {
        handleError();
      }
    };

    handleSearch();
  }, [history, location, handleError]);
  return (
    <Container>
      <h1>{loading ? 'Loading...' : 'Results:'}</h1>
      <div>
        {!!movies &&
          movies.map(movie => (
            <Card
              data={movie}
              key={movie.id}
              onClick={() => history.push(`/movies/${movie.id}`, movie)}></Card>
          ))}
      </div>
    </Container>
  );
};

export default SearchResults;
