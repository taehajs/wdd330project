export function addFavorite(movie) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.find(f => f.title === movie.title)) {
    favorites.push(movie);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  } else {
    alert(`${movie.title} is already in favorites!`);
  }
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}