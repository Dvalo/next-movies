const API_KEY = process.env.API_KEY;

export const movieGenreIds = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

export const requests = {
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
};

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

export function discoverMoviesByGenre(genre) {
  return `/discover/movie?api_key=${API_KEY}&with_genres=${movieGenreIds[genre].id}`;
}
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
