import {useState, useEffect} from "react";
import {Link, useParams, Outlet} from "react-router-dom";
import {fetchGetMovieById} from "../../services/Api";
import {MoviesDetailsWrapper, MovieAdditionalDetails} from "./MovieDetails.styled";
import noPhoto from "../../images/nophoto.jpeg";

const MovieDetails = () => {
	const [movieData, setMovieData] = useState({});
	const {movieId} = useParams();
	
	useEffect(() => {
		fetchGetMovieById(movieId).then(result => {
			setMovieData(result)
		}).catch(error => console.log(error))
	}, [])
	
	console.log('movieData', movieData)
	const {poster_path, title, original_title, vote_average, overview, genres} = movieData
	
	console.log("genres", genres)
	return (
		<>
			{movieData && (
				<>
					<MoviesDetailsWrapper>
						<img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : noPhoto}
							 alt={title}/>
						<div className='description'>
							<h2>{original_title}</h2>
							<p>User score: {vote_average}</p>
							<h4>Overview</h4>
							<p>{overview}</p>
							<h4>Genres</h4>
							<ul className="genres">
								{genres && genres.map(genre => (<li key={genre.id}>{genre.name}</li>))}
							</ul>
						</div>
					</MoviesDetailsWrapper>
					<MovieAdditionalDetails>
						{/*<ul>*/}
						{/*	<Link to={`/${movieId}/cast`}>Cast</Link>*/}
						{/*	<Link >Reviews</Link>*/}
						{/*</ul>*/}
						<Outlet/>
					</MovieAdditionalDetails>
				</>
			)}
		</>
	)
}

export default MovieDetails;