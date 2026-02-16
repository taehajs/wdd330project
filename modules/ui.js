import { addFavorite } from './storage.js';

export function renderMovie(movie, container, extra = null) {
  if (!movie) {
    container.innerHTML = '<p>No movie found.</p>';
    return;
  }

  const card = document.createElement('div');
  card.className = 'movie-card animate__animated animate__fadeIn';

  card.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p>Release Date: ${movie.release_date || 'N/A'}</p>
    
    <p>TMDB Rating: ${movie.vote_average || 'N/A'}</p>
    <p>${movie.overview ? movie.overview.substring(0, 100) + '...' : 'No overview available.'}</p>
    ${extra ? `
      <p>Director: ${extra.Director || 'N/A'}</p>
      <p>IMDB Rating: ${extra.imdbRating || 'N/A'}</p>
      <p>Genre: ${extra.Genre || 'N/A'}</p>
    ` : ''}
    <button class="fav-btn">Add to Favorites</button>
  `;

  card.querySelector('.fav-btn').addEventListener('click', () => {
    addFavorite({ title: movie.title, poster: movie.poster_path });
    alert(`${movie.title} added to favorites!`);
  });

  container.appendChild(card);
}