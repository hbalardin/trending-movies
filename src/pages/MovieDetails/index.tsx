import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import RatingStars from '../../components/RatingStars';
import Movie from '../../components/Card/interface';

import {
  Container,
  GenresContainer,
  MovieCard,
  RatingContainer
} from './styles';

import api from '../../services/api';

interface Genre {
  id: number;
  name: string;
}

const MovieDetails = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const history = useHistory();

  const movie = history.location.state as Movie;

  useEffect(() => {
    if (!movie) return history.push('/');
    window.scrollTo(0, 0);

    const loadData = async () => {
      try {
        const response = await api.get(`genre/movie/list`, {
          params: {
            api_key: 'b9a162a4975820acf517003c0ae2c2d2'
          }
        });

        const allGenres = response.data.genres;

        const filteredGenres = movie.genre_ids.map(genreId => {
          return allGenres.find((genre: Genre) => genre.id === genreId);
        });

        setGenres(filteredGenres);
      } catch (error) {}
    };

    loadData();
  }, [movie, history]);

  return (
    <>
      <Header />
      {!!movie && (
        <Container imageUrl={movie.image}>
          <MovieCard>
            <h2>{movie.title}</h2>
            <RatingContainer>
              <span>
                <RatingStars
                  size={16}
                  average={movie.vote_average}></RatingStars>
                <p>{movie.vote_average}</p>
              </span>
            </RatingContainer>
            <GenresContainer>
              {genres.map(genre => (
                <span key={genre.id}>{genre.name}</span>
              ))}
            </GenresContainer>
            <p>{movie.overview}</p>
          </MovieCard>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
