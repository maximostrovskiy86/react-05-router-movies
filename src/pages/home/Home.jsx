import React, {useEffect, useState} from "react";
import {fetchGetTrendingMovies} from "../../services/Api";
import {HomeStyle} from "./Home.styled";


const Home = () => {
	
	const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		fetchGetTrendingMovies()
			.then(movies => setMovies(movies))
			.catch(err => console.error(err));
	}, [])
	
	console.log("movies", movies.results)
	
	return (
		<HomeStyle>
			{movies.results && (
				<ul>
					{movies.results.map(movie => (<li key={movie.id}>{movie.original_title}</li>))}
				</ul>
			)}
		</HomeStyle>
	)
}

export default Home;