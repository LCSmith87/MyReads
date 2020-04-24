import React from 'react'
import './Section.css'

const Section = (props) => {
	return(
		<div className="container">
			<div className="section">
				<h2>{props.name}</h2>
				<div className="section-books">
					{props.children}
				</div>
			</div>
		</div>
	)
}

export default Section;