import React, { Component } from 'react';
import Book from './Book/Book.js';
import BookBtn from './BookBtn/BookBtn.js';
import SearchBar from './SearchBar/SearchBar.js';
import * as booksAPI from './utils/BooksAPI';

class Search extends Component {
	state = {
		query: ' ',
		searchBooks: [],
		categorizedBooks: [],
	}
	componentDidMount() {
		this.getBooks();
	}
	getBooks = () => {
		booksAPI.getAll()
		.then((books) => {
			this.setState({
				categorizedBooks: books
			})
		});
	}
	syncCategories = (bookID, category)  => {
		//Runs the update function on the home app is well
		this.props.handleCategoryChange(bookID, category);
	    const book = {
	      id: bookID
	    };
	    booksAPI.update(book, category)
	    .then((result) => {
	    	console.log(result);
	      this.getBooks();
	      this.searchBooks();
	    });
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

		//Checks for empty queries and converts them to one space
		//I found that it performed better for rerender then no space
		const query = this.state.query;
		if(query.length > 0 || query !== " ") {
			booksAPI.search(this.state.query)
			.then((books) => {

				//Makes sure books are returned or sends an empty array
				const hasBooks = !books.error ? books : [];
				const categorizedBooks = this.state.categorizedBooks;

				//Loops the categorized books and matches with the books returned
				//from search and assigns the same shelf
				for (let i = 0; i < categorizedBooks.length; i++) {
					const foundBooksIndex = hasBooks.findIndex((book) => {
						return book.id === categorizedBooks[i].id
					});
					if(foundBooksIndex > -1) {
						hasBooks[foundBooksIndex].shelf = categorizedBooks[i].shelf;
					}

				}
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
	const { categories } = this.props;
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<SearchBar updateQuery={this.updateQuery} />
		      	<div className="search-section">
		          {this.state.searchBooks.map((book) => {
		            return(
						<Book key={book.id} book={book}>
			              <BookBtn
			              	handleCategoryChange={this.syncCategories}
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