const TMDB_KEY = '239869fef996f05ab7a210407bf4e0eb';
const OMDB_KEY = 'e1c09153';
const TMDB_BASE = 'https://api.themoviedb.org/3';


export async function searchMovies(query) {
  const res = await fetch(`${TMDB_BASE}/search/movie?api_key=${TMDB_KEY}&query=${query}&language=en-US`);
  const data = await res.json();
  return data.results || [];
}


export async function getRandomMovie() {
  const res = await fetch(`${TMDB_BASE}/movie/popular?api_key=${TMDB_KEY}&language=en-US&page=1`);
  const data = await res.json();
  const randomIndex = Math.floor(Math.random() * data.results.length);
  return data.results[randomIndex];
}


export async function getMovieDetails(title) {
  const res = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_KEY}`);
  const data = await res.json();
  return data;
}