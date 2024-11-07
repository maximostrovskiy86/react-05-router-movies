import {BASE_URL, API_KEY} from "../const/base";

export const fetchGetTrendingMovies = () => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTczMDc5OTY3NC40MjYyNTA3LCJzdWIiOiI2MzYzZjEwZTA5MWU2MjAwN2ExYWVhODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eJI9gXbsupneV2VUEkdd0MWxatfvPJUOms0Ngmx8yYM'
		}
	};
	
	return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
		.then(res => res.json())
}


export const fetchGetSearchMovies = async (keyword) => {
	const response = await fetch(`${BASE_URL}/3/${keyword}/movie?include_adult=false&language=en-US&page=1`, {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: `Bearer ${API_KEY}`
			
		}
	})
	
	return await response.json();
}

export const fetchGetMovieById = async (movieId) => {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MWMwOTAyNWI0YTUwMDMwN2FlMjZjODkzZjM5YzMzNyIsIm5iZiI6MTczMDc5OTY3NC40MjYyNTA3LCJzdWIiOiI2MzYzZjEwZTA5MWU2MjAwN2ExYWVhODkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.eJI9gXbsupneV2VUEkdd0MWxatfvPJUOms0Ngmx8yYM'
		}
	};
	
	const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
	return response.json();
}

export const fetchGetByMovieCast = async (movieId) => {
	
	const params = new URLSearchParams({
		'language': 'en-US',
		'api_key': API_KEY,
	});

	const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?${params}` , {
		headers: {accept: 'application/json'}
	})
	
	return response.json();
}

export const fetchGetByMovieReviews = async (movieId) => {
	
	const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}` , {
		headers: {accept: 'application/json'}
	})
	
	return response.json();
}


