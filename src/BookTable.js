import React, { Component } from "react";

import BookRow from "./BookRow";
import { Link } from "react-router-dom";

class BookTable extends Component {
  render() {
    const bookRows = this.props.books.map(book => (
      <BookRow
        filterColor={this.props.filterColor}
        key={book.title}
        book={book}
      />
    ));
    return (
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{bookRows}</tbody>
      </table>
    );
  }
}

export default BookTable;
