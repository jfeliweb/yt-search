/** @format */

import React, { useState } from 'react'

const SearchBar = ({ onTermSubmit }) => {
	const [term, setTerm] = useState('')

	const userInput = e => {
		setTerm(e.target.value)
	}

	const userFormSubmit = e => {
		e.preventDefault()

		onTermSubmit(term)
	}

	return (
		<div className='search-bar box'>
			<form onSubmit={userFormSubmit}>
				<div className='field'>
					<label className='label'>Search For A Video</label>
					<div className='control is-expanded'>
						<input className='input' type='text' value={term} onChange={userInput} />
					</div>
				</div>
			</form>
		</div>
	)
}

export default SearchBar
