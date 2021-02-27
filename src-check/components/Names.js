import React, { Component } from 'react';
import Name from './Name';

export class Names extends Component {
	render() {
		return (
			<div
				style={{
					padding: 20,
					borderRight: this.props.borderBoy
						? 'solid 5px lightblue'
						: 'solid 5px lightpink',
					borderBottom: this.props.borderBoy
						? 'solid 5px lightblue'
						: 'solid 5px lightpink',
					borderTop: this.props.borderGirl
						? 'solid 5px lightpink'
						: 'solid 5px lightblue',
					borderLeft: this.props.borderGirl
						? 'solid 5px lightpink'
						: 'solid 5px lightblue',
					borderRadius: 10,
				}}
			>
				{this.props.names.map((name) => (
					<Name
						key={name.id}
						name={name}
						addToFavorites={this.props.addToFavorites}
					/>
				))}
			</div>
		);
	}
}

export default Names;
