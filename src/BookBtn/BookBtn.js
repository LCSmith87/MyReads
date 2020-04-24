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
								{this.props.categories.map((category) => {
									return <li key={category.id}>{category.shelfTitle}</li>
								})}
							</ul>
						</div>
				</div>
			</div>
		)
	}
}

export default BookBtn;