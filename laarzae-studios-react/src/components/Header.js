import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="header">
			<img
				src="/logo-crop.jpeg"
				alt="Laarzae Studios"
				width="20%"
				scale="125%"
			/>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/login">Log In</Link>
				<Link to="/register">Sign Up</Link>
				<Link to="/about">About Us</Link>
				<Link to="/meet">Meet The Team</Link>
				<Link to="/games">Games</Link>
			</nav>
		</div>
	);
};

export default Header;
