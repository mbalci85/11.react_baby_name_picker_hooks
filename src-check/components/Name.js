import React, { Component } from 'react';

export class Name extends Component {
	render() {
		return (
			<div style={{ display: 'inline-block' }}>
				<button
					style={{
						border: 'none',
						padding: 7,
						margin: 3,
						borderRadius: 10,
						backgroundColor:
							this.props.name.sex === 'f' ? 'lightpink' : 'lightblue',
					}}
					onClick={this.props.addToFavorites.bind(
						this,
						this.props.name.id,
					)}
				>
					{this.props.name.name}
				</button>
			</div>
		);
	}
}

export default Name;
