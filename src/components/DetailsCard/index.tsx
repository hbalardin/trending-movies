import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiCalendar, FiClock } from 'react-icons/fi';

import logoImg from '../../assets/logo.png';

import Movie from './interface';

import RatingStars from '../RatingStars';

import {
  Average,
  Container,
  Content,
  GenresContainer,
  ImageContainer,
  Info,
  OverviewContainer,
  Title
} from './styles';
import { FaArrowLeft } from 'react-icons/fa';

interface DetailsCardProps {
  data: Movie;
}

const DetailsCard = ({ data }: DetailsCardProps) => {
  const history = useHistory();

  return (
    <Container className="shadow">
      <ImageContainer imageUrl={data.image ? data.image : logoImg}>
        <button onClick={() => history.goBack()}>
          <FaArrowLeft size={24} color="#fff"></FaArrowLeft>
        </button>
      </ImageContainer>
      <Content>
        <Title>{data.title}</Title>
        <Average>
          <div>
            <p>{data.parsedVoteAverage}</p>
            <RatingStars average={Number(data.vote_average)} size={16} />
          </div>
          <p>({data.vote_count})</p>
        </Average>
        <Info>
          {data.release_date ? (
            <span>
              <FiCalendar
                className="scale"
                size={20}
                color="#F62E76"></FiCalendar>
              <p>{data.release_date}</p>
            </span>
          ) : null}
          {data.runtime ? (
            <span>
              <FiClock className="scale" size={20} color="#f62e76"></FiClock>
              <p>{data.runtime} minutes</p>
            </span>
          ) : null}
        </Info>
        {data.genres && data.genres.length > 0 && (
          <GenresContainer>
            {data.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </GenresContainer>
        )}

        {data.overview && (
          <OverviewContainer>
            <h4>Synopsis</h4>
            <p>{data.overview}</p>
          </OverviewContainer>
        )}
      </Content>
    </Container>
  );
};

export default DetailsCard;
