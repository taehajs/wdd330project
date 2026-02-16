import { searchMovie, getRandomMovie } from './modules/api.js';
import { renderMovie } from './modules/ui.js';

const searchBtn = document.getElementById('searchBtn');


const randomBtn = document.getElementById('randomBtn');
const movieInput = document.getElementById('movieInput');
const resultDiv = document.getElementById('result');

searchBtn.addEventListener('click', async () => {
  const query = movieInput.value.trim();
  if (!query) return;
  const movie = await searchMovie(query);

  resultDiv.innerHTML = '';
  renderMovie(movie, resultDiv);
});

randomBtn.addEventListener('click', async () => {
  const movie = await getRandomMovie();
  resultDiv.innerHTML = '';
  
  renderMovie(movie, resultDiv);
});