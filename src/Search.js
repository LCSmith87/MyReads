import React, { Component } from 'react';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';

class Search extends Component {
	render() {
	const { categories,
	    books,
	    handleCategoryChange
	  } = this.props;
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<div className="search-section">
		          {books.map((book) => {
		            return(
						<Book key={book.id} book={book}>
			              <BookBtn
			              	handleCategoryChange={handleCategoryChange}
			              	currentCategory={book.shelf}
			              	bookID={book.id}
			              	categories={categories} />
			            </Book>
		            )
		          })}
		        </div>
			</div>
		)
	}
}

export default Search;