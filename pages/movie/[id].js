import Head from "next/head";
import Layout from "../../layout/Layout";
import ShowcaseSingle from "../../components/ShowcaseSingle";
import {
  fetchMovieCreditsById,
  fetchMovieDetailsById,
  fetchMovieVideosById,
} from "../../utils/requests";

function MovieSingle({ movieDetails, movieCredits, movieVideos }) {
  return (
    <>
      <Head>
        <title>
          {movieDetails.title} (
          {new Date(movieDetails.release_date).getFullYear()})
        </title>
      </Head>
      <Layout>
        <ShowcaseSingle
          type="movie"
          showcase={movieDetails}
          videos={movieVideos}
          cast={movieCredits}
        />
      </Layout>
    </>
  );
}

export default MovieSingle;

export async function getServerSideProps(context) {
  const movieId = context.query.id;

  const movieDetails = await fetchMovieDetailsById(movieId);
  const movieCredits = await fetchMovieCreditsById(movieId);
  const movieVideos = await fetchMovieVideosById(movieId);

  if (movieDetails.success !== undefined && !movieDetails.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      movieDetails: movieDetails,
      movieCredits: movieCredits,
      movieVideos: movieVideos,
    },
  };
}
