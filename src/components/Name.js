import React from 'react';

const Name = ({ name }) => {
	return (
		<div style={{ display: 'inline-block' }}>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: name.sex === 'f' ? 'lightpink' : 'lightblue',
				}}
			>
				{name.name}
			</button>
		</div>
	);
};

export default Name;
