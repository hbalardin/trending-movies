import React, { MouseEventHandler } from 'react';
import { FiCalendar } from 'react-icons/fi';

import Movie from './interface';

import RatingStars from '../Stars';

import { Average, Container, Content, ImageContainer } from './styles';
import { FaStar } from 'react-icons/fa';

interface CardProps {
  data: Movie;
  onClick: MouseEventHandler<HTMLElement>
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
        <img src={`${data.image}`} alt="image" />
      </ImageContainer>
      <Content>
        <strong>{data.title}</strong>
        <div>
          <FiCalendar size={20} color="#F62E76"></FiCalendar>
          <p>{data.release_date}</p>
        </div>
        <div>
          <RatingStars average={data.vote_average} color="#FBDB56" size={16} />
          <p>({data.vote_count})</p>
        </div>
        <Average backgroundColor={averageColor}>
          <FaStar size={20} color="#030202"></FaStar>
          <p>{data.vote_average}</p>
        </Average>
      </Content>
    </Container>
  );
};

export default Card;
