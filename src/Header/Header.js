import React from 'react'
import './Header.css'
import logo from './myreads-logo.png'

const Header = () => {
	return(
		<div className="header">
			<img src={logo} alt="MyReads Logo" />
		</div>
	)
}

export default Header;