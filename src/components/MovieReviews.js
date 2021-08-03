// Code MovieReviews Here

import React from "react";

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map((review) => (
      <div className="review">
        <h1>{review.display_title}</h1>
        <p>{review.critics_pick}</p>
      </div>
    ))}
  </div>
);

export default MovieReviews;
