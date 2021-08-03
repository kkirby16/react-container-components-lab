import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "your-key-here";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      reviews: [],
    };
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.setState({ searchTerm: event.target.value });
  };

  getMovieReviews = (event) => {
    event.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?=Ogrk0OP6BuMm0m1JatGOxGxAJWgi1tsQ&query=${this.state.searchTerm}`
    )
      .then((response) => response.json())
      .then((movieData) => this.setState({ reviews: movieData.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getMovieReviews}>
          <input
            onChange={this.handleSearchChange}
            value={this.state.value}
          ></input>
        </form>

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

export default SearchableMovieReviewsContainer;
