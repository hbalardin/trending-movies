import React from 'react';
import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

import { Container } from './styles';

interface RatingStarsProps {
  average: number;
  size: number;
}

const RatingStars = ({ average, size }: RatingStarsProps) => {
  const filledStars = Number(String(average / 2)[0]);
  const emptyStar = Number(String(average)[0]) % 2 === 0 ? 0 : 1;

  const newArray = Array.from(Array(5).keys());

  const updatedStars = newArray.map(index => {
    if (index < filledStars) {
      return (
        <FaStar size={size - 1} color="#fbdb56" className="scale" key={index} />
      );
    }
    if (emptyStar && index === filledStars) {
      return (
        <FaStarHalfAlt
          size={size - 1}
          color="#fbdb56"
          className="scale"
          key={index}
        />
      );
    }
    return <FiStar size={size} color="#fbdb56" className="scale" key={index} />;
  });

  return <Container>{updatedStars.map(star => star)}</Container>;
};

export default RatingStars;
