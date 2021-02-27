import React, { Component } from 'react';

export class NameFavorite extends Component {
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
							this.props.favoriteName.sex === 'f'
								? 'lightpink'
								: 'lightblue',
					}}
					onClick={this.props.removeFromFavorites.bind(
						this,
						this.props.favoriteName.id,
					)}
				>
					{this.props.favoriteName.name}
				</button>
			</div>
		);
	}
}

export default NameFavorite;
