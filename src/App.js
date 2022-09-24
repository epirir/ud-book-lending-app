import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  shelves = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  getBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks();
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={books}
              changeBookShelf={this.changeShelf}
              shelves={this.shelves}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks changeBookShelf={this.changeShelf} books={books} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
