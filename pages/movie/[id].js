import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import MovieTrailer from "../../components/MovieTrailer";
import CastSlider from "../../components/CastSlider";
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
        <div className="showcase-single">
          <div className="showcase-image">
            <Image
              src={`${process.env.API_IMAGES}${
                movieDetails.backdrop_path || movieDetails.poster_path
              }`}
              alt={movieDetails.original_title}
              layout="responsive"
              objectFit="cover"
              height={690}
              width={1920}
            />
            <div className="showcase-details-wrapper">
              <Container className="px-3 px-md-5" fluid>
                <div className="showcase-title">
                  {movieDetails.original_title}
                </div>
                <div className="showcase-details">
                  <div className="showcase-date">
                    {new Date(movieDetails.release_date).toDateString()}
                  </div>
                  <div className="showcase-length">
                    {Math.floor(movieDetails.runtime / 60)}hr{" "}
                    {movieDetails.runtime % 60}min
                  </div>
                </div>
                <div className="showcase-genres">
                  {movieDetails.genres.map((genre) => (
                    <Link href={`/movies/${genre.id}`} key={genre.id}>
                      <a className="showcase-genre">{genre.name}</a>
                    </Link>
                  ))}
                </div>
                <div className="showcase-desc">{movieDetails.overview}</div>
                <div className="showcase-trailer-wrapper">
                  {movieVideos.results &&
                    movieVideos.results.slice(0, 4).map((video, index) => (
                      <MovieTrailer
                        trailer={video}
                        index={index}
                        key={video.key}
                      />
                    ))}
                </div>
              </Container>
            </div>
          </div>
          <div className="showcase-complete-details">
            <Container className="px-5" fluid>
              <h1 className="sect-title">
                <span>Popular</span> cast
              </h1>
              <CastSlider cast={movieCredits.cast} />
            </Container>
          </div>
        </div>
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
    }
  }

  return {
    props: {
      movieDetails: movieDetails,
      movieCredits: movieCredits,
      movieVideos: movieVideos,
    },
  };
}
