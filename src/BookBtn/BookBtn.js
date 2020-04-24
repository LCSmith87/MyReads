import React, { Component } from 'react'
import './BookBtn.css'
import { FaEllipsisH } from 'react-icons/fa'

class BookBtn extends Component {
	state = {
		open: false,
	}
	handleClick = (event) => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	}
	handleMenuClick = (bookID,category) => {
		this.props.handleCategoryChange(bookID, category);
	}
	render() {
		let isOpen = this.state.open ? "" : "hidden";
		return(
			<div className="container">
				<div className="book-btn">
					<div onClick={(event) => this.handleClick(event)} className="circle">
						<span>
							<FaEllipsisH />
						</span>
					</div>
					<div className={`book-menu ${isOpen}`}>
							<ul>
								<span className="book-menu-title">Move to...</span>
								{this.props.categories.map((category) => {
									return <li onClick={() => this.handleMenuClick(this.props.bookID, category.name)} className="book-menu-item" key={category.id}>{category.shelfTitle}</li>
								})}
							</ul>
						</div>
				</div>
			</div>
		)
	}
}

export default BookBtn;