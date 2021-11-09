import { Container } from "react-bootstrap";
import GenreFilter from "../../components/GenreFilter";
import MainSlider from "../../components/MainSlider";
import ShowcaseItem from "../../components/ShowcaseItem";
import MainLayout from "../../layout/MainLayout";
import { fetchTrendingTvShows } from "../../utils/requests";

import { dummy } from "../../utils/dummy";

function TvShows({ tvshows }) {
  return (
    <MainLayout>
      <MainSlider slides={tvshows.slice(0, 4)} />
      <Container>
        <GenreFilter />
        <section className="item-showcase showcase-main">
          {tvshows.map((movie) => (
            <ShowcaseItem item={movie} descType="movie" key={movie.id} />
          ))}
        </section>
      </Container>
    </MainLayout>
  );
}

export default TvShows;

export async function getServerSideProps(context) {
  // const trendingTvShows = fetchTrendingTvShows();

  return {
    props: {
      tvshows: dummy,
    },
  };
}
