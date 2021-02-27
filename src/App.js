import React, { useState } from 'react';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';

const App = () => {
	const [names, setNames] = useState(allNames);
	return (
		<div>
			<h1
				style={{
					textAlign: 'center',
					fontSize: 56,
					marginTop: 15,
					fontWeight: 'bolder',
				}}
			>
				<span>BABY</span> <span>NAME</span> <span>PICKER</span>
			</h1>
			<NameFilter />
			<Names names={allNames} />
		</div>
	);
};

export default App;
