import React, { useState } from 'react';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';

const App = () => {
	const [names, setNames] = useState(allNames);
	const [borderBoy, setBorderBoy] = useState(false);
	const [borderGirl, setBorderGirl] = useState(false);

	const filterGirls = () => {
		setNames(allNames.filter((name) => name.sex === 'f'));
		setBorderGirl(true);
		setBorderBoy(false);
	};

	const filterBoys = () => {
		setNames(allNames.filter((name) => name.sex === 'm'));
		setBorderGirl(false);
		setBorderBoy(true);
	};

	const filterAll = () => {
		setNames(allNames);
		setBorderGirl(false);
		setBorderBoy(false);
	};

	const filterName = (e) => {
		setNames(
			allNames.filter((name) =>
				name.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		);
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
				<span
					style={{
						color: borderBoy
							? 'lightblue'
							: borderGirl
							? 'lightpink'
							: 'lightgray',
					}}
				>
					BABY
				</span>{' '}
				<span style={{ color: borderGirl ? 'lightpink' : 'lightblue' }}>
					NAME
				</span>{' '}
				<span style={{ color: borderBoy ? 'lightblue' : 'lightpink' }}>
					PICKER
				</span>
			</h1>
			<NameFilter
				filterGirls={filterGirls}
				filterBoys={filterBoys}
				filterAll={filterAll}
				filterName={filterName}
			/>
			<Names names={names} borderBoy={borderBoy} borderGirl={borderGirl} />
		</div>
	);
};

export default App;
