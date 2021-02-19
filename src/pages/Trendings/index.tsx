import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import Card from '../../components/Card';
import Movie from '../../components/Card/interface';

import api from '../../services/api';

import { Container } from './styles';
import Header from '../../components/Header';

const Trendings = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

  const history = useHistory();

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await api.get(`trending/movie/day`, {
          params: {
            api_key: 'b9a162a4975820acf517003c0ae2c2d2'
          }
        });

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
      } catch (error) {}
    };
    loadData();
  }, []);
  return (
    <>
      <Header />
      <Container>
        {movies.map(movie => (
          <Card
            data={movie}
            key={movie.id}
            onClick={() => history.push(`/movies/${movie.id}`, movie)}></Card>
        ))}
      </Container>
    </>
  );
};

export default Trendings;
