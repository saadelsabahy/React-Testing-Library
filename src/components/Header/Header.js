import React from 'react';
import './Header.css';

export default function Header({ title }) {
	return (
		<>
			<h1 className='header'>{title}</h1>
			<h1 className='header' data-testid='header-2'>
				header2
			</h1>
		</>
	);
}
