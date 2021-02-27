import React from 'react';
import Names from './components/Names';
import allNames from './Names';

const App = () => {
	return (
		<div>
			<h1 style={{ textAlign: 'center', fontSize: 56, marginTop: 15 }}>
				<span>BABY</span> <span>NAME</span> <span>PICKER</span>
			</h1>
			<Names names={allNames} />
		</div>
	);
};

export default App;
