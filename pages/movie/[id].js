import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy, movieDetailsDummy, castDummy } from "../../utils/dummy";
import {
  discoverMoviesByGenre,
  fetchMovieCreditsById,
  fetchMovieDetailsById,
  requests,
} from "../../utils/requests";
import CastSlider from "../../components/CastSlider";

function MovieSingle({ movieDetails, movieCredits }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp
  return (
    <>
      <Head>
        <title>
          {movieDetailsDummy[0].title} (
          {new Date(movieDetailsDummy[0].release_date).getFullYear()})
        </title>
      </Head>
      <Layout>
        <div className="showcase-single">
          <div className="showcase-image">
            <Image
              src={`${BASE_URL}${
                movieDetailsDummy[0].backdrop_path ||
                movieDetailsDummy[0].poster_path
              }`}
              alt={movieDetailsDummy[0].original_title}
              layout="responsive"
              objectFit="cover"
              height={690}
              width={1920}
            />
            <div className="showcase-details-wrapper">
              <Container className="px-5" fluid>
                <div className="showcase-title">
                  {movieDetailsDummy[0].original_title}
                </div>
                <div className="showcase-details">
                  <div className="showcase-date">
                    {new Date(movieDetailsDummy[0].release_date).toDateString()}
                  </div>
                  <div className="showcase-length">
                    {Math.floor(movieDetailsDummy[0].runtime / 60)}hr{" "}
                    {movieDetailsDummy[0].runtime % 60}min
                  </div>
                </div>
                <div className="showcase-genres">
                  {movieDetailsDummy[0].genres.map((genre) => (
                    <Link href={`/movies/${genre.name.toLocaleLowerCase()}`} key={genre.id}>
                      <a className="showcase-genre">{genre.name}</a>
                    </Link>
                  ))}
                </div>
                <div className="showcase-desc">
                  {movieDetailsDummy[0].overview}
                </div>
              </Container>
            </div>
          </div>
          <div className="showcase-complete-details">
            <Container className="px-5" fluid>
              <h1 className="sect-title">Popular cast</h1>
              <CastSlider cast={castDummy} />
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

  // const movieDetailsReq = await fetch(
  //   `https://api.themoviedb.org/3${fetchMovieDetailsById(movieId)}`
  // ).then((res) => res.json());

  // const movieCreditsReq = await fetch(
  //   `https://api.themoviedb.org/3${fetchMovieCreditsById(movieId)}`
  // ).then((res) => res.json());

  return {
    props: {
      movieDetails: "dummy",
      movieCredits: "dummy1",
    },
  };
}
