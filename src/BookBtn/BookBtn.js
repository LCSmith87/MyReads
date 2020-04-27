import React, { Component } from 'react'
import './BookBtn.css'
import { FaEllipsisH } from 'react-icons/fa'

class BookBtn extends Component {
	container = React.createRef();
	childContainer = React.createRef();
	state = {
		open: false,
	}
	componentDidMount() {
		//Adding event listener to detect for clicks outside of the component
		document.addEventListener('mousedown', this.handleClickOutside, false);
	}
	componentWillUnmount() {
		//Removing event listener to detect for clicks outside of the component
		document.removeEventListener('mousedown', this.handleClickOutside, false);
	}
	handleClick = (event) => {
		this.toggleMenu();
	}
	handleClickOutside = (event) => {
		  if (this.container.current
		  		&& !this.container.current.contains(event.target)
		  		&& !this.childContainer.current.contains(event.target)) {
		    this.setState({
		      open: false,
		    });
		  }
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
		const open = this.state.open ? "" : "hidden";
		return(
			<div className="container">
				<div className="book-btn">
					<div ref={this.container} onClick={() => this.handleClick()} className="circle">
						<span>
							<FaEllipsisH />
						</span>
					</div>
				</div>
				<div className={open} ref={this.childContainer}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default BookBtn;