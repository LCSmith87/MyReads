import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
	state = {
		query: ''
	}
	updateQuery = (event) => {
		this.setState({
			query: event.target.value
		}, () => {
			this.props.handleSearch(this.state.query);
		})

	}
	render() {
		return(
			<div className="search-bar">
				<input
					type="text"
					name="search"
					className="search-bar-input"
					onChange={(event) => this.updateQuery(event)}
					placeholder="🔎 Search..."
				/>
			</div>
		)
	}
}

export default SearchBar;