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
  const { location, push } = useHistory();

  const movie = location.state as Movie;

  useEffect(() => {
    if (!movie) return push('/');
    window.scrollTo(0, 0);

    const loadData = async () => {
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
    };

    loadData();
  }, [movie, push]);

  return (
    <>
      <Header />
      <Container imageUrl={movie.image}>
        <MovieCard>
          <h2>{movie.title}</h2>
          <RatingContainer>
            <RatingStars size={16} average={movie.vote_average}></RatingStars>
            <span>{movie.vote_average}</span>
          </RatingContainer>
          <GenresContainer>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </GenresContainer>
          <p>{movie.overview}</p>
        </MovieCard>
      </Container>
    </>
  );
};

export default MovieDetails;
