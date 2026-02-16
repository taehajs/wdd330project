import { searchMovies, getRandomMovie, getMovieDetails } from './modules/api.js';
import { renderMovie, renderFavorites } from './modules/ui.js';

const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const favoritesBtn = document.getElementById('favoritesBtn');
const movieInput = document.getElementById('movieInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
  const query = movieInput.value.trim();
  if (!query) return;
  const movies = await searchMovies(query);

  resultDiv.innerHTML = '';
  for (const movie of movies) {
    const extra = await getMovieDetails(movie.title);
    renderMovie(movie, resultDiv, extra);
  }
});

randomBtn.addEventListener('click', async () => {
  const movie = await getRandomMovie();
  const extra = await getMovieDetails(movie.title);
  resultDiv.innerHTML = '';
  
  renderMovie(movie, resultDiv, extra);
});

favoritesBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '';
  renderFavorites(resultDiv);
});