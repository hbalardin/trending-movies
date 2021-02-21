import React, { MouseEventHandler } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import Movie from './interface';

import RatingStars from '../RatingStars';

import {
  Average,
  Container,
  Content,
  ImageContainer,
  Info,
  Title
} from './styles';

interface CardProps {
  data: Movie;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Card = ({ data, onClick }: CardProps) => {
  let averageColor = '';

  if (data.vote_average < 6) {
    averageColor = '#e13d57';
  } else if (data.vote_average < 8) {
    averageColor = '#fbdb56';
  } else {
    averageColor = '#38b183';
  }

  return (
    <Container onClick={onClick} className="move">
      <ImageContainer imageUrl={data.image ? data.image : logoImg} />
      <Content>
        <Title>{data.title}</Title>
        <Info>
          <div>
            <RatingStars average={Number(data.vote_average)} size={16} />
            <p>({data.vote_count})</p>
          </div>
          {data.release_date ? (
            <div>
              <FiCalendar
                className="scale"
                size={20}
                color="#F62E76"></FiCalendar>
              <p>{data.release_date}</p>
            </div>
          ) : null}
        </Info>
        <Average backgroundColor={averageColor}>
          <FaStar size={16} color="#1e073f"></FaStar>
          <p>{data.parsedVoteAverage}</p>
        </Average>
      </Content>
    </Container>
  );
};

export default Card;
