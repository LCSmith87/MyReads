import React from 'react'
import './BookMenu.css'

const BookMenu = (props) => {
	const isOpen = props.isOpen ? "book-menu" : "book-menu hidden";
	return (
		<div className={isOpen}>
			<ul>
				<span className="book-menu-title">Move to...</span>
				{props.categories.map((category) =>
					<li onClick={() => props.handleMenuClick(props.bookID, category.name)}
						className={props.currentCategory === category.name ? "book-menu-item check" : "book-menu-item"}
						key={category.id}>{category.shelfTitle}
					</li>
				)}
			</ul>
		</div>
	)
}

export default BookMenu;