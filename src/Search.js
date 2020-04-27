import React, { Component } from 'react';
import Book from './Book/Book.js';
import SearchBar from './SearchBar/SearchBar.js';
import BookBtn from './BookBtn/BookBtn.js';
import BookMenu from './BookMenu/BookMenu.js';
import * as booksAPI from './utils/BooksAPI';

class Search extends Component {
	state = {
		query: ' ',
		books: [],
		searchBooks: []
	}
	componentDidMount() {
		this.getBooks();
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
	getBooks() {
	    booksAPI.getAll()
	    .then((books) => {
	      this.setState(() => ({
	        books
	      }), () => {
	      	this.searchBooks();
	      })
	    })
	}
	handleMenuClick = (bookID, category) => {
		const book = {
		  id: bookID
		};
		booksAPI.update(book, category)
		.then((result) => {
		  this.getBooks();
		})
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
				for (let i = 0; i < hasBooks.length; i++) {
					const foundInBooks = this.state.books.find((b) => {
						return b.id === hasBooks[i].id;
					})
					if(foundInBooks) {
						hasBooks[i].shelf = foundInBooks.shelf;
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
		return(
			<div className="container">
		      <h1>Search</h1>
		      	<SearchBar updateQuery={this.updateQuery} />
		      	<div className="search-section">
		          {this.state.searchBooks.map((book) => {
		            return(
						<Book
		                  key={book.id}
		                  book={book}
		                >
		                  <BookBtn>
		                    <BookMenu
		                      categories={this.props.categories}
		                      currentCategory={book.shelf}
		                      handleMenuClick={this.handleMenuClick}
                      		  bookID={book.id}
		                    />
		                  </BookBtn>
                		</Book>
		            )
		          })}
		        </div>
			</div>
		)
	}
}

export default Search;