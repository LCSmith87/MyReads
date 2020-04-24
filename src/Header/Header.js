import React from 'react'
import './Header.css'
import logo from './myreads-logo.png'
import { FaSearch, FaArrowLeft } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Header = (props) => {

	//Grab the current route from react router
	let location = useLocation();

	//Toggles the icon depending on the page
	const isSearch = location.pathname === '/search'
		?	<Link className="back-icon" to="/"><FaArrowLeft /></Link>
		:	<Link className="search-icon" to="/search"><FaSearch /></Link>;
	return(
		<header className="header">
			<div className="container">
				<Link to="/"><img src={logo} alt="MyReads Logo" /></Link>
				{isSearch}
			</div>
		</header>
	)
}

export default Header;