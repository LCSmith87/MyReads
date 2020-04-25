import React, { Component } from 'react'
import './BookBtn.css'
import { FaEllipsisH } from 'react-icons/fa'

class BookBtn extends Component {
	state = {
		open: false,
	}
	handleClick = () => {
		this.toggleMenu();
	}
	handleMenuClick = (bookID,category) => {
		this.props.handleCategoryChange(bookID, category);
		this.toggleMenu();
	}
	toggleMenu = () => {
		this.setState((prevState) => ({
			open: !prevState.open
		}));
	}
	render() {
		let isOpen = this.state.open ? "" : "hidden";
		return(
			<div className="container">
				<div className="book-btn">
					<div onClick={() => this.handleClick()} className="circle">
						<span>
							<FaEllipsisH />
						</span>
					</div>
					<div className={`book-menu ${isOpen}`}>
							<ul>
								<span className="book-menu-title">Move to...</span>
								{this.props.categories.map((category) =>
									<li onClick={() => this.handleMenuClick(this.props.bookID, category.name)}
										className={this.props.currentCategory === category.name ? "book-menu-item check" : "book-menu-item"}
										key={category.id}>{category.shelfTitle}
									</li>
								)}
							</ul>
						</div>
				</div>
			</div>
		)
	}
}

export default BookBtn;