import React from 'react'
import './Book.css'
import noThumbnail from .'/no-thumbnail.png';

const Book = (props) => {
	const thumbnail = props.imageLinks.thumbnail
		? props.imageLinks.thumbnail
		: props.imageLinks.smallThumbnail
			? props.imageLinks.smallThumbnail
			: noThumbnail;
	const { title, authors } = props.book;
	return(
		<div className="container">
			<div className="book">
				<div className="book-cover">
					<img src={thumbnail} alt={`${title} book cover`} />
				</div>
				<div className="book-title">
					<h3>{title}</h3>
				</div>
				<div className="book-authors">
					{authors.map((author) => {
						<h4 key={author}>{author}</h4>
					})}
				</div>
			</div>
		</div>
	)
}

export default Book;