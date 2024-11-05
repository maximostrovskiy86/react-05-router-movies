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


