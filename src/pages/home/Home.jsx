import React, {useEffect, useState} from "react";
import {fetchGetTrendingMovies} from "../../services/Api";
import {HomeStyle} from "./Home.styled";
import {Link} from "react-router-dom";
import PageHeading from "../../components/pageHeading";


const Home = () => {
	
	const [movies, setMovies] = useState([]);
	
	useEffect(() => {
		fetchGetTrendingMovies()
			.then(movies => setMovies(movies))
			.catch(err => console.error(err));
	}, [])
	
	// console.log("movies", movies.results)
	
	return (
		<HomeStyle>
			<PageHeading text="Trending today"/>
			
			{movies.results && (
				<ul>
					{movies.results.map(movie => (
						<li key={movie.id}>
							<Link to={`/movies/${movie.id}`}>
								{movie.original_title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</HomeStyle>
	)
}

export default Home;