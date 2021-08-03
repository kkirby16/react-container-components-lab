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
    fetch(URL.concat(this.state.searchTerm))
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

        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
