import React from 'react';

const NameFilter = () => {
	return (
		<div style={{ textAlign: 'center' }}>
			<input placeholder="Type to filter names..." />
			<button>All</button>
			<button>Boys</button>
			<button>Girls</button>
		</div>
	);
};

export default NameFilter;
