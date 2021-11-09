import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import ShowcaseItem from "../../components/ShowcaseItem";

function TvShowsGenre({ genre, results }) {
  return (
    <>
      <Head>
        <title>
          TV Shows - {genre.charAt(0).toUpperCase()}
          {genre.slice(1)}
        </title>
      </Head>
      <Layout>
        <div className="showcase-wrapper">
          <Container fluid className="showcase-container">
            <div className="item-showcase showcase-inner">
              <h1 className="sect-title">
                <span>{genre}</span> category
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
