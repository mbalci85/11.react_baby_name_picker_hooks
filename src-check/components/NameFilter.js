import React, { Component } from 'react';

export class NameFilter extends Component {
	render() {
		return (
			<div style={{ marginBottom: 20 }}>
				<input
					placeholder="Type to filter names...."
					style={{ width: 450, marginRight: 15, height: 40 }}
					onChange={this.props.filterName}
				/>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
						backgroundColor: 'lightgray',
					}}
					onClick={this.props.filterAll}
				>
					All
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
						backgroundColor: 'lightblue',
					}}
					onClick={this.props.filterBoys}
				>
					Boys
				</button>
				<button
					style={{
						border: 'none',
						padding: 7,
						borderRadius: 10,
						margin: 2,
						backgroundColor: 'lightpink',
					}}
					onClick={this.props.filterGirls}
				>
					Girls
				</button>
			</div>
		);
	}
}

export default NameFilter;
