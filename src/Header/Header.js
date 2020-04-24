import React from "react"
import "./Header.css"
import logo from "./myreads-logo.png"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = () => {
	return(
		<header className="header">
			<div className="container">
				<Link to="/"><img src={logo} alt="MyReads Logo" /></Link>
				<Link className="search-icon" to="/search"><FaSearch /></Link>
			</div>
		</header>
	)
}

export default Header;