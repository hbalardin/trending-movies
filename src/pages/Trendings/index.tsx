import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

import Card from '../../components/Card';
import Movie from '../../components/Card/interface';

import api from '../../services/api';

import { Container } from './styles';

const Trendings = () => {
  const [movies, setMovies] = useState<Movie[]>([] as Movie[]);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setLoading(true);
    const loadData = async () => {
      try {
        const response = await api.get(`trending/movie/week`, {
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

          const parsedVoteAverage =
            String(movie.vote_average).length === 1
              ? movie.vote_average + '.0'
              : String(movie.vote_average);

          const parsedMovie: Movie = {
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
        history.push('/error-page', 500);
      }
    };
    loadData();
  }, [history]);
  return (
    <Container>
      <h1>{loading ? 'Loading...' : 'Trending movies of week:'}</h1>

      <div>
        {movies.map(movie => (
          <Card
            data={movie}
            key={movie.id}
            onClick={() => history.push(`/movies/${movie.id}`, movie)}></Card>
        ))}
      </div>
    </Container>
  );
};

export default Trendings;
