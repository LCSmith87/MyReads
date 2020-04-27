import React from 'react'
import './BookMenu.css'

const BookMenu = (props) => {
	const currentCategory = !props.currentCategory
		|| props.currentCategory === "none"
		? "none"
		: props.currentCategory;
	return (
		<div className="book-menu">
			<ul>
				<span className="book-menu-title">Move to...</span>
				{props.categories.map((category) =>
					<li onClick={() => props.handleMenuClick(props.bookID, category.name)}
						className={currentCategory === category.name ? "book-menu-item check" : "book-menu-item"}
						key={category.id}>{category.shelfTitle}
					</li>
				)}
			</ul>
		</div>
	)
}

export default BookMenu;