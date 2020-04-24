import React, { Component } from 'react';
import './App.css';
import Section from './Section/Section.js';
import * as booksAPI from './utils/BooksAPI';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';

class App extends Component {
  state = {
    books: [],
    categories: [
        {
          id: 1,
          name: 'currentlyReading',
          shelfTitle: 'Currently Reading',
          shown: true
        },
        {
          id: 2,
          name: 'wantToRead',
          shelfTitle: 'Want to Read',
          shown: true
        },
        {
          id: 3,
          name: 'read',
          shelfTitle: 'Read',
          shown: true
        },
        {
          id: 4,
          name: 'none',
          shelfTitle: 'None',
          shown: false
        }
      ]
  }
  componentDidMount() {
    //Retrieve the books from the server
    booksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  render() {
    const shownCategories = this.state.categories.filter((category) => {
      return category.shown === true;
    });
    return (
      <div className="App">
          <div className="container">
            <h1>Home</h1>
            {shownCategories.map((category) => (
              <Section key={category.id} name={category.shelfTitle}>
                {this.state.books.map((book) => {
                  return book.shelf === category.name
                  ? <Book key={book.id} book={book}>
                      <BookBtn categories={this.state.categories} />
                    </Book>
                  : "";
                })}
              </Section>
            ))}
          </div>
      </div>
    );
  }
}

export default App;
