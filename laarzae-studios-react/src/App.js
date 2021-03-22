import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './components/Header';
import MeetTheTeam from './components/MeetTheTeam';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/meet">
					<MeetTheTeam />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
