import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "Ogrk0OP6BuMm0m1JatGOxGxAJWgi1tsQ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      searchedMovieReviews: [],
    };
  }

  handleSearchChange = (event) => {
    event.preventDefault();
    this.setState({ search: event.target.value });
  };

  getMovieReviews = () => {
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?=Ogrk0OP6BuMm0m1JatGOxGxAJWgi1tsQ&query=${this.state.search}`
    )
      .then((response) => response.json())
      .then((movieData) =>
        this.setState({ searchedMovieReviews: movieData.results })
      );
  };

  return() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getMovieReviews}>
          <input
            onChange={this.handleSearchChange}
            value={this.state.value}
          ></input>
        </form>
        {this.state.searchedMovieReviews.map((review) => (
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
