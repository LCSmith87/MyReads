import React, { Component } from 'react';
import './App.css';
import * as booksAPI from './utils/BooksAPI';
import Home from './Home.js';
import Search from './Search.js';
import Header from './Header/Header.js'
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

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
  handleCategoryChange = (bookID, category) => {
    //Get the book array
    const bookArr = this.state.books.slice();
    //Find the book in the array
    const bookIndex = bookArr.findIndex((x) => {
      return x.id === bookID
    });
    //Change the category of the book in the array
    bookArr[bookIndex].shelf = category;
    //Set state with the new array
    this.setState(() => ({
      books: bookArr
    }))
  }
  render() {
    const shownCategories = this.state.categories.filter((category) => {
      return category.shown === true;
    });
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Home
                categories={this.state.categories}
                books={this.state.books}
                shownCategories={shownCategories}
                handleCategoryChange={this.handleCategoryChange}
              />
            }}/>
            <Route path="/search" render={(props) => {
              return <Search
                categories={this.state.categories}
                books={this.state.books}
                handleCategoryChange={this.handleCategoryChange}
              />
            }}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
