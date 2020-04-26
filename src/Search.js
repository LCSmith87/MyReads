import React, { Component } from 'react';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';
import SearchBar from './SearchBar/SearchBar.js';
import * as booksAPI from './utils/BooksAPI';

class Search extends Component {
	state = {
		query: ' ',
		searchBooks: []
	}
	updateQuery = (event) => {
		const query = event.target.value.length > 0
			? event.target.value
			: " ";
			this.setState({
				query: query
			}, () => {
				this.searchBooks();
			});
	}
	searchBooks = () => {
		const query = this.state.query;
		if(query.length > 0 || query !== " ") {
			booksAPI.search(this.state.query)
			.then((books) => {
				const hasBooks = !books.error ? books : [];
				this.setState({
					searchBooks: hasBooks
				})
			})
		} else {
			this.setState({
				searchBooks: []
			})
		}
	}
	render() {
	const { categories,
	    handleCategoryChange
	  } = this.props;
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<SearchBar updateQuery={this.updateQuery} />
		      	<div className="search-section">
		          {this.state.searchBooks.map((book) => {
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