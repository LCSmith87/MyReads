import React, { Component } from 'react';
import Section from './Section/Section.js';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';
import BookMenu from './BookMenu/BookMenu.js';
import * as booksAPI from './utils/BooksAPI';

class Home extends Component {
    state = {
    books: []
  }
  componentDidMount() {
    this.getBooks();
  }
  getBooks() {
    booksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  handleMenuClick = (bookID, category) => {
    const book = {
      id: bookID
    };
    booksAPI.update(book, category)
    .then((result) => {
      this.getBooks();
    })
  }
  render() {
    const categories = this.props.categories.filter((category) => {
      return category.shown;
    })
    return(
      <div className="container">
        <h1>Home</h1>
        {categories.map((category) => (
          <Section key={category.id} name={category.shelfTitle}>
            {this.state.books.map((book) => {
              return book.shelf === category.name
              ? <Book
                  key={book.id}
                  book={book}
                >
                  <BookBtn>
                    <BookMenu
                      categories={this.props.categories}
                      currentCategory={book.shelf}
                      handleMenuClick={this.handleMenuClick}
                      bookID={book.id}
                    />
                  </BookBtn>
                </Book>
              : "";
            })}
          </Section>
        ))}
      </div>
    )
  }
}

export default Home;