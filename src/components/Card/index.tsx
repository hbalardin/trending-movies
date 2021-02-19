import React, { MouseEventHandler } from 'react';
import { FiCalendar } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';

import Movie from './interface';

import RatingStars from '../RatingStars';

import { Average, Container, Content, ImageContainer } from './styles';

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
    <Container onClick={onClick}>
      <ImageContainer>
        <img src={`${data.image ? data.image : logoImg}`} alt="image" />
      </ImageContainer>
      <Content>
        <strong>{data.title}</strong>
        {data.release_date ? (
          <div>
            <FiCalendar size={20} color="#F62E76"></FiCalendar>
            <p>{data.release_date}</p>
          </div>
        ) : null}
        <div>
          <RatingStars average={data.vote_average} size={16} />
          <p>({data.vote_count})</p>
        </div>
        <Average backgroundColor={averageColor}>
          <FaStar size={20} color="#1e073f"></FaStar>
          <p>{data.vote_average}</p>
        </Average>
      </Content>
    </Container>
  );
};

export default Card;
