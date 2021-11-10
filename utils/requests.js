const API_KEY = process.env.API_KEY;

const API_PATH = "https://api.themoviedb.org/3";

/**
 * Movies
 */

export async function fetchTrendingMovies() {
  return await fetch(
    `${API_PATH}/trending/movie/week?api_key=${API_KEY}`
  ).then((res) => res.json());
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
    `${API_PATH}/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreId}&page=${page}`
  ).then((res) => res.json());
}

/**
 * Tv shows
 */

export async function fetchTrendingTvShows() {
  return await fetch(
    `${API_PATH}/tv/popular?api_key=${API_KEY}`
  ).then((res) => res.json());
}

/**
 * Actors
 */

export async function fetchTrendingActors() {
  const trendingActors = await fetch(
    `${API_PATH}/person/popular?api_key=${API_KEY}`
  ).then((res) => res.json());

  return trendingActors;
}

export async function fetchActorDetails(actorId) {
  const actorDetails = await fetch(
    `${API_PATH}/person/${actorId}?api_key=${API_KEY}`
  ).then((res) => res.json());

  return actorDetails;
}

export async function fetchActorCombinedCredits(actorId) {
  return await fetch(
    `${API_PATH}/person/${actorId}/combined_credits?api_key=${API_KEY}`
  ).then((res) => res.json());
}

// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
