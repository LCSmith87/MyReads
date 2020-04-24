import React from 'react';
import Section from './Section/Section.js';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';

const Home = (props) => {
  const { shownCategories, categories, books } = props;
  return(
    <div className="container">
      <h1>Home</h1>
      {shownCategories.map((category) => (
        <Section key={category.id} name={category.shelfTitle}>
          {books.map((book) => {
            return book.shelf === category.name
            ? <Book key={book.id} book={book}>
                <BookBtn bookID={book.id} categories={categories} />
              </Book>
            : "";
          })}
        </Section>
      ))}
    </div>
  )
}

export default Home;