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
              />
            }}/>
            <Route path="/search" render={(props) => {
              return <Search
                categories={this.state.categories}
                books={this.state.books}
              />
            }}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
