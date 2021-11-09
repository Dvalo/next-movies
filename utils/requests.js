const API_KEY = process.env.API_KEY;

const API_PATH = "https://api.themoviedb.org/3";

export function fetchTrendingMovies() {
  return `/trending/movie/week?api_key=${API_KEY}`;
}

export function fetchMovieDetailsById(id) {
  return `/movie/${id}?api_key=${API_KEY}`;
}

export function fetchMovieCreditsById(id) {
  return `/movie/${id}/credits?api_key=${API_KEY}`;
}

export function fetchMovieVideosById(id) {
  return `/movie/${id}/videos?api_key=${API_KEY}`;
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
  const trendingTvShows = await fetch(
    `${API_PATH}/tv/popular?api_key=${API_KEY}`
  ).then((res) => res.json());
  return trendingTvShows;
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
  const actorCombinedCredits = await fetch(
    `${API_PATH}/person/${actorId}/combined_credits?api_key=${API_KEY}`
  ).then((res) => res.json());

  return actorCombinedCredits;
}

// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
