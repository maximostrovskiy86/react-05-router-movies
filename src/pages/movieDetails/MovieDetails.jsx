import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchGetMovieById} from "../../services/Api";
import {MoviesDetailsWrapper} from "./MovieDetails.styled";
import noPhoto from "../../images/nophoto.jpeg";


const MovieDetails = () => {
	const [movieData, setMovieData] = useState({});
	const { movieId } = useParams();
	const param = useParams();
	console.log("param();", param)
	
	
	useEffect( () => {
		fetchGetMovieById(movieId).then(result => {
			setMovieData(result)
			console.log("RESULT", result);
		}).catch(error => console.log(error))
	}, [movieId])
	
	console.log('movieData', movieData)
	
	return (
		<MoviesDetailsWrapper>
			<img src={movieData.poster_path ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}` : noPhoto}
				 alt={movieData.title}/>
		</MoviesDetailsWrapper>
	)
}

export default MovieDetails;