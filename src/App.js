import React, { useState } from 'react';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';

const App = () => {
	const [names, setNames] = useState(allNames);

	const filterGirls = () => {
		setNames(allNames.filter((name) => name.sex === 'f'));
	};

	const filterBoys = () => {
		setNames(allNames.filter((name) => name.sex === 'm'));
	};

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
			<NameFilter filterGirls={filterGirls} filterBoys={filterBoys} />
			<Names names={names} />
		</div>
	);
};

export default App;
