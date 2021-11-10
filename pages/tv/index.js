import Head from "next/head";
import { Container } from "react-bootstrap";
import MainLayout from "../../layout/MainLayout";
import GenreFilter from "../../components/GenreFilter";
import MainSlider from "../../components/MainSlider";
import ShowcaseItem from "../../components/ShowcaseItem";
import { fetchTrendingTvShows } from "../../utils/requests";
import { filterValidMovieItems } from "../../utils/helpers";

function TvShows({ tvshows }) {
  const tvShowsResults = tvshows.results;
  const tvShowsSlides = filterValidMovieItems(tvShowsResults).slice(0, 5);

  return (
    <>
      <Head>
        <title>Trending TV Shows</title>
      </Head>
      <MainLayout>
        <MainSlider slides={tvShowsSlides} type="tvshows" />
        <Container>
          <GenreFilter filterType="tvshows" />
          <section className="item-showcase showcase-main">
            {tvShowsResults.map((movie) => (
              <ShowcaseItem
                item={movie}
                descType="movie"
                path="tv"
                key={movie.id}
              />
            ))}
          </section>
        </Container>
      </MainLayout>
    </>
  );
}

export default TvShows;

export async function getServerSideProps(context) {
  const trendingTvShows = await fetchTrendingTvShows();

  return {
    props: {
      tvshows: trendingTvShows,
    },
  };
}
