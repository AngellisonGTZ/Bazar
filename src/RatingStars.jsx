import React from 'react';

const StarRating = ({ totalStars, rating }) => {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          style={{
            color: index < rating ? 'gold' : 'grey',
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;