
const fetchTmdb = (url, options = {}) => {
  const baseUrl = 'https://api.themoviedb.org/3/'
  const postHeader = options.method === 'POST' ? { 'content-type': 'application/json' } : {}
  const headers = {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    ...postHeader
  }
  return fetch(`${baseUrl}${url}`, { headers, ...options });
}

const getMovie = async (title) => {
  const response = await fetchTmdb(`search/movie?query=${title}`);

  if (response.ok) {
    return response.json();
  }
  const error = await response.json()
  throw new Error(`Failed to search movies: ${error.status_message}`);
}

const addToWatchList = async (movieId) => {
  const response = await fetchTmdb(`account/${process.env.TMDB_ACCOUNT_ID}/watchlist`, {
    method: 'POST',
    body: JSON.stringify({ media_type: 'movie', media_id: parseInt(movieId), watchlist: true })
  });

  if (response.ok) {
    return response.json();
  }
  const error = await response.json()
  throw new Error(`Failed to add to watchlist: ${error.status_message}`);
}

const removeFromWatchList = async (movieId) => {
  const response = await fetchTmdb(`account/${process.env.TMDB_ACCOUNT_ID}/watchlist`, {
    method: 'POST',
    body: JSON.stringify({ media_type: 'movie', media_id: movieId, watchlist: false })
  });

  if (response.ok) {
    return response.json();
  }
  const error = await response.json()
  throw new Error(`Failed to remove from watchlist: ${error.status_message}`);
}

const getWatchList = async () => {
  const response = await fetchTmdb(`account/${process.env.TMDB_ACCOUNT_ID}/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc`);

  if (response.ok) {
    return response.json();
  }
  const error = await response.json()
  throw new Error(`Failed to get watchlist: ${error.status_message}`);
}

export { getMovie, addToWatchList, getWatchList, removeFromWatchList }