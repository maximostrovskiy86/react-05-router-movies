import {Routes, Route} from "react-router-dom";
import Container from "./container";
import Home from '../pages/home';
import Navigation from './navigation';
import Movies from "../pages/movies";
import NotFound from "../pages/NotFound";
import React, {useState} from "react";
import MovieDetails from "../pages/movieDetails";
import Cast from "./cast";
import Reviews from "./reviews";


function App() {
	const [casts, setCast] = useState(null);
	const [reviews, setReviews] = useState(null);
	
	return (
		<Container>
			<Navigation/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/movies" element={<Movies/>}/>
				<Route path="/movies/:movieId" element={<MovieDetails setCast={setCast} setReviews={setReviews}/>}>
					<Route path="cast" element={<Cast casts={casts}/>}/>
					<Route path="reviews" element={<Reviews reviews={reviews}/>}/>
				</Route>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</Container>
	);
}

export default App;
