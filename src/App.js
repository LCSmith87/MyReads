import React, { Component } from 'react';
import './App.css';
import Section from './Section/Section.js';
import * as booksAPI from './utils/BooksAPI';
import Book from './Book/Book.js'

const data = {
  categories: [
    {
      id: 1,
      name: 'currentlyReading',
      shelfTitle: 'Currently Reading'
    },
    {
      id: 2,
      name: 'wantToRead',
      shelfTitle: 'Want to Read'
    },
    {
      id: 3,
      name: 'read',
      shelfTitle: 'Read'
    }
  ]
};

class App extends Component {
  state = {
    books: []
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
    return (
      <div className="App">
          <div className="container">
            <h1>Home</h1>
            {data.categories.map((category) => (
              <Section key={category.id} name={category.shelfTitle}>
                {this.state.books.map((book) => {
                  return book.shelf === category.name
                  ? <Book
                      key={book.id}
                      book={book}
                      categeories={data.categories}
                    />
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
