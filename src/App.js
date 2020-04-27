import React from 'react';
import './App.css';
import Home from './Home.js';
import Search from './Search.js';
import Header from './Header/Header.js';
import { BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

const App = () => {
  const categories = [
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
  ];
  return(
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => {
              return <Home
                categories={categories}
              />
            }}/>
            <Route path="/search" render={(props) => {
              return <Search
                categories={categories}
              />
            }}/>
          </Switch>
        </Router>
      </div>
  )
}

export default App;
