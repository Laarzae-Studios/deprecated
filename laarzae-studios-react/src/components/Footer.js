import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<nav>
				<a href="https://www.linkedin.com/in/LaarzaeStudios/">
					<i class="fa fa-linkedin fa-3x" aria-hidden="true" />
				</a>
				<a href="mailto:LaarzaeStudios@gmail.com">
					<i class="fa fa-envelope fa-3x" aria-hidden="true" />
				</a>
				<a href="https://www.facebook.com/LaarzaeStudios">
					<i
						class="fa fa-facebook-official fa-3x"
						aria-hidden="true"
					/>
				</a>
				<a href="https://twitter.com/LaarzaeStudios">
					<i
						class="fa fa-twitter-square fa-3x"
						aria-hidden="true"
					/>
				</a>
				<a href="https://www.instagram.com/laarzaestudios/">
					<i class="fa fa-instagram fa-3x" aria-hidden="true" />
				</a>
			</nav>
		</div>
	);
};

// !! Can add other links in the future, twitch, reddit, etc, if needed

export default Footer;
