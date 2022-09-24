import React from "react";
function BookControl({ changeBookShelf, book, shelfId }) {
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => changeBookShelf(book, event.target.value)}
        value={shelfId}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default BookControl;
