import {Routes, Route} from "react-router-dom";
import Container from "./container";
import Home from '../pages/home';
import Navigation from './navigation';
import Movies from "../pages/movies";
import NotFound from "../pages/NotFound";
import React from "react";
import MovieDetails from "../pages/movieDetails";


function App() {
	return (
		<Container>
			<Navigation/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/movies" element={<Movies/>}/>
				<Route path="/movies/:movieId" element={<MovieDetails/>}>
					<Route path="cast"/>
					<Route path="reviews"/>
				</Route>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</Container>
	);
}

export default App;
