import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
	return (
		<div className="header">
            <Link to="/home">
			<img  src="/logo-crop.jpeg" alt="Laarzae Studios" width="200px" />
            </Link>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<Link to="/meet">Meet The Team</Link>
				<Link to="/games">Games</Link>
				<Link to="/login">Log In</Link>
				<Link to="/register">Sign Up</Link>
			</nav>
		</div>
	);
};

export default Header;
