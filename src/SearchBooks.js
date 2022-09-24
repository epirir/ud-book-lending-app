import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    searchResults: [],
  };

  updateQueryParam = (query) => {
    this.setState({
      query: query,
    });

    query
      ? this.updateSearchedBooks(query)
      : this.setState({ searchResults: [] });
  };

  updateSearchedBooks = (query) => {
    BooksAPI.search(query).then((searchResults) => {
      this.setState({
        searchResults: searchResults.error ? [] : searchResults,
      });
    });
  };

  resetSearch = () => {
    this.setState({ searchResults: [] });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.resetSearch}>
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.updateQueryParam(e.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map((searchResult) => {
              let defaultShelf = "none";

              this.props.books.map((book) =>
                book.id === searchResult.id ? (defaultShelf = book.shelf) : ""
              );

              return (
                <li key={searchResult.id}>
                  <Book
                    book={searchResult}
                    changeBookShelf={this.props.changeBookShelf}
                    shelfId={defaultShelf}
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
