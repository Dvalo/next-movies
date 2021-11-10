import Head from "next/head";
import { Container } from "react-bootstrap";
import MainLayout from "../layout/MainLayout";
import MainSlider from "../components/MainSlider";
import ShowcaseItem from "../components/ShowcaseItem";
import GenreFilter from "../components/GenreFilter";
import { fetchTrendingMovies } from "../utils/requests";
import { filterValidMovieItems } from "../utils/helpers";

export default function Home({ movies }) {
  const moviesResults = movies.results;
  const moviesSlides = filterValidMovieItems(moviesResults).slice(0, 5);

  return (
    <>
      <Head>
        <title>Trending Movies</title>
        <meta name="description" content="Movies App made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <MainSlider slides={moviesSlides} type="movies" />
        <Container>
          <GenreFilter filterType="movies" />
          <section className="item-showcase showcase-main">
            {moviesResults.map((movie) => (
              <ShowcaseItem
                item={movie}
                descType="movie"
                path="movie"
                key={movie.id}
              />
            ))}
          </section>
        </Container>
      </MainLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const trendingMovies = await fetchTrendingMovies();

  return {
    props: {
      movies: trendingMovies,
    },
  };
}
