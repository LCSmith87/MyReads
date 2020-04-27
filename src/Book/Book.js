import React from 'react'
import './Book.css'
import noThumbnail from './no-thumbnail.png';

const Book = (props) => {
		const thumbnail = props.book.imageLinks ? props.book.imageLinks.thumbnail : noThumbnail;
		const authors = props.book.authors ? props.book.authors : ["Unknown Author"];
		const title  = props.book.title;
	return(
		<div className="book">
			<div className="book-cover">
				<img src={thumbnail} alt={`${title} book cover`} />
			</div>
			<div className="book-bottom">
				<div className="book-title">
					<h3>{title}</h3>
				</div>
				<div className="book-authors">
					{authors.map((author) => {
						return <h4 key={author}>{author}</h4>
					})}
				</div>
			</div>
			<div className="book-btn-section">
				{props.children}
			</div>
		</div>
	)
}

export default Book;