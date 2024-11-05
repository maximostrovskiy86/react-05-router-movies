import React from 'react';
import {Header, Link} from "./Navigation.styled";

const Navigation = () => {
	return (
		<Header>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/movies">Movies</Link>
			</nav>
		</Header>
	)
}

export default Navigation;