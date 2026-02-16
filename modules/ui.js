import { addFavorite, getFavorites } from './storage.js';
import { truncateText, formatDate, getPosterUrl } from './utils.js';

export function renderMovie(movie, container, extra = null) {
  if (!movie) {
    container.innerHTML = '<p>No movie found.</p>';
    return;
  }

  const card = document.createElement('div');
  card.className = 'movie-card animate__animated animate__fadeIn';

  card.innerHTML = `
    <img src="${getPosterUrl(movie.poster_path)}" alt="${movie.title}">
    <h3>${movie.title}</h3>
    <p><strong>Release Date:</strong> ${formatDate(movie.release_date)}</p>
    <p><strong>TMDB Rating:</strong>  ${movie.vote_average || 'N/A'}</p>
    <p>${truncateText(movie.overview)}</p>
    
    ${extra ? `
      <p><strong>Director:</strong> ${extra.Director || 'N/A'}</p>
      <p><strong>IMDB Rating:</strong>  ${extra.imdbRating || 'N/A'}</p>
      <p><strong>Genre:</strong> ${extra.Genre || 'N/A'}</p>
    ` : ''}
    <div class="card-actions">
      <button class="fav-btn"> Add to Favorites</button>
    </div>
  `;

 
  card.querySelector('.fav-btn').addEventListener('click', () => {
    addFavorite({ title: movie.title, poster: movie.poster_path });
    alert(`${movie.title} added to favorites!`);
  });

  container.appendChild(card);
}

export function renderFavorites(container) {
  const favorites = getFavorites();
  if (favorites.length === 0) {
    container.innerHTML = '<p>No favorites yet.</p>';
    return;
  }

  favorites.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card animate__animated animate__fadeIn';
    card.innerHTML = `
      <img src="${getPosterUrl(movie.poster)}" alt="${movie.title}">
      <h3>${movie.title}</h3>
      <p><em>Saved in Favorites</em></p>
    `;
    container.appendChild(card);
  });
}