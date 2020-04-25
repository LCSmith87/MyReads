import React, { Component } from 'react';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';
import SearchBar from './SearchBar/SearchBar.js';

class Search extends Component {
	state = {
		filteredBooks: []
	}
	handleSearch = (query) => {
		const books = this.props.books;
		let filteredBooks = books.filter((book) => {
			return query
				? book.title.toLowerCase().includes(query.toLowerCase())
				: "";
		});
		this.setState((prevState) => ({
			filteredBooks: filteredBooks
		}))
	}
	render() {
	const { categories,
	    handleCategoryChange
	  } = this.props;
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<SearchBar handleSearch={this.handleSearch} />
		      	<div className="search-section">
		          {this.state.filteredBooks.map((book) => {
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