const API_KEY = process.env.API_KEY;
const API_PATH = process.env.API_PATH;

/**
 * Movies
 */

export async function fetchTrendingMovies() {
  return await fetch(`${API_PATH}/trending/movie/week?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

export async function fetchMovieDetailsById(id) {
  return await fetch(`${API_PATH}/movie/${id}?api_key=${API_KEY}`).then((res) =>
    res.json()
  );
}

export async function fetchMovieCreditsById(id) {
  return await fetch(`${API_PATH}/movie/${id}/credits?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

export async function fetchMovieVideosById(id) {
  return await fetch(`${API_PATH}/movie/${id}/videos?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

/**
 * Discover
 */

export async function discoverMoviesByGenre(genreId, page = 1) {
  return await fetch(
    `${API_PATH}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  ).then((res) => res.json());
}

export async function discoverTvShowsByGenre(genreId, page = 1) {
  return await fetch(
    `${API_PATH}/discover/tv?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`
  ).then((res) => res.json());
}

/**
 * Tv shows
 */

export async function fetchTrendingTvShows() {
  return await fetch(`${API_PATH}/tv/popular?api_key=${API_KEY}`).then((res) =>
    res.json()
  );
}

/**
 * Actors
 */

export async function fetchTrendingActors(page) {
  return await fetch(`${API_PATH}/person/popular?api_key=${API_KEY}&page=${page}`).then(
    (res) => res.json()
  );
}

export async function fetchActorDetails(actorId) {
  return await fetch(`${API_PATH}/person/${actorId}?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}

export async function fetchActorCombinedCredits(actorId) {
  return await fetch(
    `${API_PATH}/person/${actorId}/combined_credits?api_key=${API_KEY}`
  ).then((res) => res.json());
}

/**
 * Search
 */
export async function searchMultiByTerm(searchTerm, page = 1) {
  return await fetch(
    `${API_PATH}/search/multi?api_key=${API_KEY}&query=${searchTerm}&page=${page}`
  ).then((res) => res.json());
}
