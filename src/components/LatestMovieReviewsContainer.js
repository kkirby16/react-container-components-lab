import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "your-key-here";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
//api key: Ogrk0OP6BuMm0m1JatGOxGxAJWgi1tsQ

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=Ogrk0OP6BuMm0m1JatGOxGxAJWgi1tsQ"
    )
      .then((response) => response.json())
      .then((movieData) => this.setState({ reviews: movieData.results }));
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        {this.state.reviews.map((review) => (
          <MovieReviews
            display_title={review.display_title}
            critics_pick={review.critics_pick}
          />
        ))}
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
