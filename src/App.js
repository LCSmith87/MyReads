import React from 'react';
import './App.css';
import Section from './Section/Section.js';

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

function App() {
  return (
    <div className="App">
        <div className="container">
          <h1>Home</h1>
          {data.categories.map((category) => (
            <Section key={category.id} name={category.name} />
          ))}
        </div>
    </div>
  );
}

export default App;
