import React from 'react';
import './App.css';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			{/* // TODO Login, Register, Logout links to be used later */}
			{/* <Link to="/login">Log In</Link>
      <Link to="/register">Sign Up</Link> 
      <Link to="/login" onClick={() => {localStorage.clear()}>Log Out</Link>*/}
			<Header />
			{/* <h1> Hello, world! </h1> */}
		</div>
	);
}

export default App;
