import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
	return(
		<div className="search-bar">
			<input
				type="text"
				name="search"
				className="search-bar-input"
				onChange={(event) => props.updateQuery(event)}
				placeholder="🔎 Search..."
			/>
		</div>
	)
}
export default SearchBar;