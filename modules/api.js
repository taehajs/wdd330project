const API_KEY = 'YOUR_TMDB_API_KEY'; 
const BASE_URL = 'https://api.themoviedb.org/3';

export async function searchMovie(query) {
  const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US`);
  const data = await res.json();
  return data.results[0]; 
}

export async function getRandomMovie() {
  const randomId = Math.floor(Math.random() * 1000); 
  
  const res = await fetch(`${BASE_URL}/movie/${randomId}?api_key=${API_KEY}&language=en-US`);
  const data = await res.json();
  return data;
}