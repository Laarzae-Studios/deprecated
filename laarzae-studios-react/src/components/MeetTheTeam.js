import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetTheTeam = () => {
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

	// ?? Do axios get, utilizing teamArr.map, to pull users
	useEffect(() => {
		teamArr.map((userName) => {
			return axios
				.get(`https://api.github.com/users/${userName}`)
				.then((res) => {
					// ?? Set state
					setState((state) => [...state, res.data]);
				})
				.catch((err) => {
					console.error('users not found', err.message);
				});
		});
	}, []);

	console.log('state - outside useEffect =====> ', state);

	return (
		<div className="meet-container">
			<div className="title">
				<h1>Meet The Team!</h1>
			</div>
			<div className="meet-the-team">
				{state.map((user) => {
					return (
						<div key={user.id} className="user-img-info">
							<div className="img-frame">
								<div className="user-img-container">
									<img
										className="user-img"
										src={user.avatar_url}
										alt={user.login}
									/>
								</div>
							</div>
							<div className="user-info">
								<div className="user-name">
									{user.name}
								</div>
								<div className="user-quote">
									{user.bio}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default MeetTheTeam;
