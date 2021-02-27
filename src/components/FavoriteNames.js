import React from 'react';
import FavoriteName from './FavoriteName';

const FavoriteNames = ({ favoriteNames, removeFromFavoriteNames }) => {
	return (
		<div
			style={{
				textAlign: 'center',
				color: 'lightgray',
			}}
		>
			<h4>
				<span>Favorite Names: </span>
				{favoriteNames.length === 0 ? (
					<span>Click Names to Select Your Favorite Names... </span>
				) : (
					favoriteNames.map((favoriteName) => (
						<FavoriteName
							key={favoriteName.id}
							favoriteName={favoriteName}
							removeFromFavoriteNames={removeFromFavoriteNames}
						/>
					))
				)}
			</h4>
		</div>
	);
};

export default FavoriteNames;
