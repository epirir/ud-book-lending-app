import React from "react";
import BookControl from "./BookControl";

function Book({ book, changeBookShelf, shelfId }) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${
              book.imageLinks ? book.imageLinks.thumbnail : ""
            }")`,
          }}
        ></div>
        <BookControl
          changeBookShelf={changeBookShelf}
          book={book}
          shelfId={shelfId}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

export default Book;
