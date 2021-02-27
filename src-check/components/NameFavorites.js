import React, { Component } from 'react';
import NameFavorite from './NameFavorite';

export class NameFavorites extends Component {
	render() {
		return (
			<div>
				<h4 style={{ color: 'lightgray' }}>
					<span>Favorite Names : </span>
				</h4>
				{this.props.favoriteNames.length === 0 ? (
					<h4 style={{ color: 'lightgray' }}>
						Click the Names to Select Your Favorite Names
					</h4>
				) : (
					this.props.favoriteNames.map((favoriteName) => (
						<NameFavorite
							key={favoriteName.id}
							favoriteName={favoriteName}
							removeFromFavorites={this.props.removeFromFavorites}
						/>
					))
				)}
			</div>
		);
	}
}

export default NameFavorites;
