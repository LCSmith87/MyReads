import React, { Component } from 'react';
import './App.css';
import Section from './Section/Section.js';
import * as booksAPI from './BooksAPI';

const data = {
  categories: [
    {
      id: 1,
      name: 'Currently Reading'
    },
    {
      id: 2,
      name: 'Want to Read'
    },
    {
      id: 3,
      name: 'Read'
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
            {console.log(this.state)}
            {data.categories.map((category) => (
              <Section key={category.id} name={category.name}>
                <h3>I am a child</h3>
              </Section>
            ))}
          </div>
      </div>
    );
  }
}

export default App;
