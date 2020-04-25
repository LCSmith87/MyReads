import React, { Component } from 'react';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';
import SearchBar from './SearchBar/SearchBar.js';

class Search extends Component {
	state = {
		query: ''
	}
	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		});
	}
	render() {
	const { categories, books,
	    handleCategoryChange
	  } = this.props;
	  //Filter books based on search query
	const fBooks = books.filter((book) => {
		return this.state.query
			? book.title.toLowerCase().includes(this.state.query.toLowerCase())
			: "";
	});
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<SearchBar updateQuery={this.updateQuery} handleSearch={this.handleSearch} />
		      	<div className="search-section">
		          {fBooks.map((book) => {
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