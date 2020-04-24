import React from 'react'
import './Header.css'
import logo from './myreads-logo.png'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Header = () => {
	return(
		<div className="header">
			<div className="container">
				<Router>
					<Link to="/"><img src={logo} alt="MyReads Logo" /></Link>
				</Router>
			</div>
		</div>
	)
}

export default Header;