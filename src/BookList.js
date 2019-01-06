import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books
    };
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  }

  filterColor(bookColor) {
    return this.state.filteredBooks.filter(book => book.color === bookColor);
  }

  render() {
    const bookColor = this.props.match.params.bookColor;
    let books;
    let allBooksButton;
    if (!bookColor) {
      books = this.state.filteredBooks;
    } else {
      books = this.filterColor(bookColor);
      allBooksButton = (
        <Link to="/books">
          <button className="btn">All Books</button>
        </Link>
      );
    }
    return (
      <div className="authors">
        <h3>Books</h3>
        <SearchBar changeHandler={this.filterBooks} />
        <BookTable filterColor={this.filterColor} books={books} />
      </div>
    );
  }
}

export default BookList;
