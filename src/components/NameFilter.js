import React from 'react';

const NameFilter = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<input
				style={{ width: 400, height: 40, marginRight: 15 }}
				placeholder="Type to filter names..."
			/>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightgray',
				}}
			>
				All
			</button>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightblue',
				}}
			>
				Boys
			</button>
			<button
				style={{
					border: 'none',
					margin: 3,
					padding: 7,
					borderRadius: 10,
					backgroundColor: 'lightpink',
				}}
			>
				Girls
			</button>
		</div>
	);
};

export default NameFilter;
