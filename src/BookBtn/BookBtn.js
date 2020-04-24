import React from 'react'
import './BookBtn.css'
import { FaEllipsisH } from 'react-icons/fa'

const BookBtn = (props) => {
	return(
		<div className="container">
			<div className="book-btn">
				<div className="circle">
					<span>
						<FaEllipsisH />
					</span>
					<div className="book-menu">
						<ul>
							{props.categories.map((category) => {
								return <li key={category.id}>{category.shelfTitle}</li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookBtn;