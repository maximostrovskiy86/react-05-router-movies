import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import SharedLayout from "./sharedLayout";
import Home from '../pages/home';
import Movies from "../pages/movies";
import NotFound from "../pages/NotFound";
import MovieDetails from "../pages/movieDetails";
import Cast from "./cast";
import Reviews from "./reviews";


function App() {
	const [casts, setCast] = useState(null);
	const [reviews, setReviews] = useState(null);
	
	return (
		<Routes>
			<Route path="/" element={<SharedLayout/>}>
				<Route index path="/" element={<Home/>}/>
				<Route path="/movies" element={<Movies/>}/>
				<Route path="/movies/:movieId" element={<MovieDetails setCast={setCast} setReviews={setReviews}/>}>
					<Route path="cast" element={<Cast casts={casts}/>}/>
					<Route path="reviews" element={<Reviews reviews={reviews}/>}/>
				</Route>
				<Route path="*" element={<NotFound/>}/>
			</Route>
		</Routes>
	);
}

export default App;
