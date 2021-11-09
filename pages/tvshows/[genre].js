import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { movieGenres } from "../../utils/utils";
import ShowcaseItem from "../../components/ShowcaseItem";

function TvShowsGenre({ genre, results }) {
  const genreName = movieGenres.find(
    (currGenre) => currGenre.id === parseInt(genre)
  ).name;

  return (
    <>
      <Head>
        <title>TV Shows - {genreName}</title>
      </Head>
      <Layout>
        <div className="showcase-wrapper">
          <Container fluid className="showcase-container">
            <div className="item-showcase showcase-inner">
              <h1 className="sect-title">
                <span>{genreName}</span> category
              </h1>

              <div className="showcase-inner-items">
                {results.map((movie) => (
                  <ShowcaseItem
                    item={movie}
                    descType="movie"
                    path="tv"
                    key={movie.id}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default TvShowsGenre;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  return {
    props: {
      genre: genre,
      results: dummy,
    },
  };
}
