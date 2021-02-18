import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import Card from '../../components/Card';
import Movie from '../../components/Card/interface';

import api from '../../services/api';

import { Container } from './styles';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);

  useEffect(() => {
    const loadData = async () => {
      const response = await api.get(`trending/movie/day`, {
        params: {
          api_key: 'b9a162a4975820acf517003c0ae2c2d2'
        }
      });

      const sortedMovies = response.data.results.sort((a: Movie, b: Movie) =>
        a.vote_average > b.vote_average ? -1 : 1
      );

      const parsedMovies = sortedMovies.map((movie: Movie) => {
        const parsedDate = format(
          new Date(movie.release_date),
          "d 'de' MMMM 'de' Y",
          { locale: pt }
        );

        return {
          ...movie,
          release_date: parsedDate,
          image: movie.poster_path
            ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
            : null
        };
      });

      setMovies(parsedMovies);
    };
    loadData();
  }, []);
  return (
    <Container>
      {movies.map(movie => (
        <Card key={movie.id} data={movie}></Card>
      ))}
    </Container>
  );
};

export default Home;
