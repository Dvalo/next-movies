const API_KEY = process.env.API_KEY;

const movieGenreIds = {
  "Action": {
    id: 28,
  },
  "Adventure": {
    id: 12,
  },
  "Animation": {
    id: 16,
  },
  "Comedy": {
    id: 35,
  },
  "Crime": {
    id: 80,
  },
  "Documentary": {
    id: 99,
  },
  "Drama": {
    id: 18,
  },
  "Family": {
    id: 10751,
  },
  "Fantasy": {
    id: 14,
  },
  "History": {
    id: 36,
  },
  "Horror": {
    id: 27,
  },
  "Music": {
    id: 10402,
  },
  "Mystery": {
    id: 9648,
  },
  "Romance": {
    id: 10749,
  },
  "Science Fiction": {
    id: 878,
  },
  "TV Movie": {
    id: 10770,
  },
  "Thriller": {
    id: 53,
  },
  "War": {
    id: 10752,
  },
  "Western": {
    id: 37,
  },
};

export const requests = {
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
};

export function discoverMoviesByGenre(genre) {
  return `/discover/movie?api_key=${API_KEY}&with_genres=${movieGenreIds[genre].id}`
}
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
