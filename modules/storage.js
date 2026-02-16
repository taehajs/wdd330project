export function addFavorite(movie) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(movie);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}
