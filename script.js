import { searchMovies, getRandomMovie, getMovieDetails, getGenreMovies } from './modules/api.js';
import { renderMovie, renderFavorites } from './modules/ui.js';

const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');

const favoritesBtn = document.getElementById('favoritesBtn');
const movieInput = document.getElementById('movieInput');
const resultDiv = document.getElementById('result');

const actionBtn = document.getElementById('actionBtn');
const comedyBtn = document.getElementById('comedyBtn');
const dramaBtn = document.getElementById('dramaBtn');

searchBtn.addEventListener('click', async () => {
  const query = movieInput.value.trim();
  if (!query) {
    resultDiv.innerHTML = '<p>Please enter a movie title.</p>';
    return;
  }
  try {
    const movies = await searchMovies(query);
    resultDiv.innerHTML = '';
    if (!movies || movies.length === 0) {
      resultDiv.innerHTML = '<p>No movies found.</p>';
      return;
    }
    for (const movie of movies.slice(0, 5)) {
      const extra = await getMovieDetails(movie.title);
      renderMovie(movie, resultDiv, extra);
    }
  } catch (err) {
    resultDiv.innerHTML = `<p>Error: ${err.message}</p>`;
  }
});

randomBtn.addEventListener('click', async () => {
  try {
    const movie = await getRandomMovie();
    const extra = await getMovieDetails(movie.title);
    resultDiv.innerHTML = '';
    renderMovie(movie, resultDiv, extra);
  } catch (err) {
    resultDiv.innerHTML = `<p>Error: ${err.message}</p>`;
  }
});

favoritesBtn.addEventListener('click', () => {
  resultDiv.innerHTML = '';
  renderFavorites(resultDiv);
});

actionBtn.addEventListener('click', async () => {
  const movies = await getGenreMovies(28); 
  resultDiv.innerHTML = '';
  for (const movie of movies.slice(0, 5)) {
    const extra = await getMovieDetails(movie.title);
    renderMovie(movie, resultDiv, extra);
  }
});

comedyBtn.addEventListener('click', async () => {
  const movies = await getGenreMovies(35); 
  resultDiv.innerHTML = '';
  for (const movie of movies.slice(0, 5)) {
    const extra = await getMovieDetails(movie.title);
    renderMovie(movie, resultDiv, extra);
  }
});


dramaBtn.addEventListener('click', async () => {
  const movies = await getGenreMovies(18); 
  resultDiv.innerHTML = '';
  for (const movie of movies.slice(0, 5)) {
    const extra = await getMovieDetails(movie.title);
    renderMovie(movie, resultDiv, extra);
  }
});