import React, { Component } from 'react';

export class About extends Component {
	render() {
		return (
			<div
				style={{
					textAlign: 'center',
					marginBottom: 200,
					marginTop: 20,
					backgroundColor: '#f2f2f6',
					padding: 70,
				}}
			>
				<h2>About Page</h2>
				<p>
					This is a 'Baby Name Picker App. It's made by using class
					components.
				</p>
				<br />
				<p>
					CopyRight <span>&#169;</span> 2021
				</p>
			</div>
		);
	}
}

export default About;
