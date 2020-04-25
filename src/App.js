import React, { Component } from 'react';
import './App.css';
import * as booksAPI from './utils/BooksAPI';
import Home from './Home.js';
import Search from './Search.js';
import Header from './Header/Header.js';
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
    this.getBooks();
  }
  handleCategoryChange = (bookID, category) => {
    const book = {
      id: bookID
    };
    booksAPI.update(book, category)
    .then((result) => {
      this.getBooks();
    });
  }
  getBooks = () => {
    booksAPI.getAll()
    .then((books) => {
      this.setState(() => ({
        books
      }))
    })
  }
  filterCategory = (categoryID) => {
    const cat = this.state.categories;
    const categoryIndex = cat.findIndex((c) => categoryID === c.id);
    cat[categoryIndex].shown = !cat[categoryIndex].shown;
    this.setState(() => ({
      categories: cat
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
                getBooks={this.getBooks}
              />
            }}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
