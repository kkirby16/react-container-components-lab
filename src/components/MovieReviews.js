// Code MovieReviews Here

import React from "react";

const MovieReviews = ({ display_title, critics_pick }) => (
  <div className="review-list">
    <div className="review">
      <h1>{display_title}</h1>
      <p>{critics_pick}</p>
    </div>
  </div>
);

export default MovieReviews;
