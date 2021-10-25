const API_KEY = process.env.API_KEY;

export const requests = {
  comedy: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
};
// https://api.themoviedb.org/3/genre/movie/list?api_key=<<api_key>>&language=en-US
