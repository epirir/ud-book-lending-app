import React, { Component } from "react";
import Bookshelf from "./BookShelf";
import { Link } from "react-router-dom";

class ListBooks extends Component {
  render() {
    const { books, shelves, changeBookShelf } = this.props;

    function booksOnShelf(shelf) {
      return books.filter((book) => book.shelf === shelf.key);
    }

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map((shelf) => (
            <Bookshelf
              key={shelf.key}
              shelf={shelf}
              shelfId={shelf.key}
              books={booksOnShelf(shelf)}
              changeBookShelf={changeBookShelf}
            />
          ))}
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default ListBooks;
