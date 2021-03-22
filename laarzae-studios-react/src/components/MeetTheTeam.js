import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetTheTeam = () => {
	const ourTeam = [];
	const [state, setState] = useState([]);

	// ?? Team array
	// TODO - will need to change this to dynamic data once backend is created
	const teamArr = [
		'ClydeFrog04',
		'heymichelle',
		'TimMitzen',
		'BenSolt',
		'tdubs42',
		'ngwatso',
		'kdneldor',
	];

	// ?? Do axios get, utilizing teamArr.forEach, to pull users
	useEffect(() => {
		teamArr.forEach((userName) => {
			axios.get(`https://api.github.com/users/${userName}`)
				.then((res) => {
					// ?? Push results to ourTeam array
					ourTeam.push(res.data);
				})
				.catch((err) =>
					console.error('users not found', err.message)
				);
			setState(ourTeam);
		});
		// ?? Set ourTeam array to state
		console.log('ourTeam array =====> ', ourTeam);
		console.log('state - inside useEffect =====> ', state);
	}, []);

	console.log('state - outside useEffect =====> ', state);

	return (
		<div className="meet-the-team">
			<h2>Meet The Team!</h2>
			{state.map((user) => {
				return (
					<div key={user.id} className="user-img-info">
						<div className="user-img-container">
							<img
								className="user-img"
								src={user.avatar_url}
								alt={user.login}
							/>
						</div>
						<div className="user-info">
							<div className="user-name">{user.name}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default MeetTheTeam;
