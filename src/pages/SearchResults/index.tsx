import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import Card from '../../components/Card';
import Movie from '../../components/Card/interface';

import api from '../../services/api';

import { Container } from './styles';
import Header from '../../components/Header';

const SearchResults = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const [_, query] = location.search.split('?query=', 2);

    const handleSearch = async () => {
      try {
        const response = await api.get('/search/movie', {
          params: {
            api_key: 'b9a162a4975820acf517003c0ae2c2d2',
            query,
            include_adult: true
          }
        });

        const sortedMovies = response.data.results.sort((a: Movie, b: Movie) =>
          a.vote_average > b.vote_average ? -1 : 1
        );

        const parsedMovies = sortedMovies.map((movie: Movie) => {
          const parsedDate = format(new Date(movie.release_date), 'MMMM d, Y');

          return {
            ...movie,
            release_date: parsedDate,
            image: movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : null
          };
        });

        setMovies(parsedMovies);
      } catch (error) {
        setMovies([]);
      }
    };

    handleSearch();
  }, [history, location]);
  return (
    <>
      <Header />
      <Container>
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
