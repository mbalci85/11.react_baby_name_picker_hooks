import React, { Component } from 'react';
import NameFavorites from './components/NameFavorites';
import NameFilter from './components/NameFilter';
import Names from './components/Names';
import allNames from './Names';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './components/About';

export class App extends Component {
	state = {
		names: allNames,
		borderGirl: false,
		borderBoy: false,
		favoriteNames: [],
	};
	filterAll = () => {
		this.setState({
			names: allNames,
			borderGirl: false,
			borderBoy: false,
			favoriteNames: [],
		});
	};

	filterBoys = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'm'),
			borderBoy: true,
			borderGirl: false,
			favoriteNames: [],
		});
	};

	filterGirls = () => {
		this.setState({
			names: allNames.filter((name) => name.sex === 'f'),
			borderBoy: false,
			borderGirl: true,
			favoriteNames: [],
		});
	};
	filterName = (e) => {
		this.setState({
			names: allNames.filter((name) =>
				name.name.toLowerCase().includes(e.target.value.toLowerCase()),
			),
		});
	};

	addToFavorites = (id) => {
		this.setState({
			favoriteNames: [...this.state.favoriteNames].concat(
				this.state.names.filter((name) => name.id === id),
			),
			names: this.state.names.filter((name) => name.id !== id),
		});
	};
	removeFromFavorites = (id) => {
		this.setState({
			favoriteNames: this.state.favoriteNames.filter(
				(favoriteName) => favoriteName.id !== id,
			),
			names: [...this.state.names].concat(
				allNames.filter(
					(name) => name.id === id && !this.state.names.includes(name),
				),
			),
		});
	};

	render() {
		return (
			<Router>
				<Route
					path="/"
					exact
					render={(props) => (
						<React.Fragment>
							<div
								style={{
									marginLeft: 30,
									marginRight: 30,
									textAlign: 'center',
								}}
							>
								<h1
									style={{
										textAlign: 'center',
										marginTop: 15,
										fontSize: 55,
										fontWeight: 'bolder',
									}}
								>
									<span
										style={{
											color: this.state.borderBoy
												? 'lightblue'
												: 'lightpink',
										}}
									>
										BABY
									</span>{' '}
									<span
										style={{
											color: this.state.borderGirl
												? 'lightpink'
												: 'lightblue',
										}}
									>
										NAME
									</span>{' '}
									<span
										style={{
											color: this.state.borderGirl
												? 'lightpink'
												: this.state.borderBoy
												? 'lightblue'
												: 'lightgray',
										}}
									>
										PICKER
									</span>
								</h1>

								<NameFilter
									filterAll={this.filterAll}
									filterBoys={this.filterBoys}
									filterGirls={this.filterGirls}
									filterName={this.filterName}
								/>
								<NameFavorites
									favoriteNames={this.state.favoriteNames}
									removeFromFavorites={this.removeFromFavorites}
								/>
								<hr style={{ height: '3px' }} />
								<Names
									names={this.state.names}
									borderBoy={this.state.borderBoy}
									borderGirl={this.state.borderGirl}
									addToFavorites={this.addToFavorites}
								/>
							</div>
						</React.Fragment>
					)}
				/>
				<Route path="/about" component={About} />
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginTop: 10,
					}}
				>
					<h4
						style={{
							display: 'inline',
							textAlign: 'center',
						}}
					>
						<Link to="/" style={{ textDecoration: 'none' }}>
							Home |{'  '}
						</Link>
						<Link to="/about" style={{ textDecoration: 'none' }}>
							About
						</Link>
					</h4>
				</div>
			</Router>
		);
	}
}

export default App;
