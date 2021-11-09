/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import MainSlider from "../components/MainSlider";
import ShowcaseItem from "../components/ShowcaseItem";
import { movieGenres, removeSpaces } from "../utils/utils";
import { dummy } from "../utils/dummy";
import { fetchTrendingMovies } from "../utils/requests";
import MainLayout from "../layout/MainLayout";
import GenreFilter from "../components/GenreFilter";

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Trending Movies</title>
        <meta name="description" content="Movies App made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <MainSlider slides={movies.slice(0, 4)} />
        <Container>
          <GenreFilter />
          <section className="item-showcase showcase-main">
            {movies.map((movie) => (
              <ShowcaseItem item={movie} descType="movie" key={movie.id} />
            ))}
          </section>
        </Container>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${fetchTrendingMovies}`
  // ).then((res) => res.json());

  return {
    props: {
      movies: dummy,
    },
  };
}
