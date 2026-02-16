export function truncateText(text, maxLength = 100) {
  if (!text) return 'No description available.';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

export function formatDate(dateString) {
  if (!dateString) return 'N/A';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function getPosterUrl(path) {
  return path
    ? `https://image.tmdb.org/t/p/w200${path}`
    : 'https://via.placeholder.com/200x300?text=No+Image';
}