import React from 'react';
import Name from './Name';

const Names = ({ names }) => {
	return (
		<div
			style={{
				margin: 25,
				textAlign: 'center',
				border: 'solid 5px lightpink',
				padding: 20,
			}}
		>
			{names.map((name) => (
				<Name key={name.id} name={name} />
			))}
		</div>
	);
};

export default Names;
