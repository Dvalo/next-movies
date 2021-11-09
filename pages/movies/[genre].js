import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { discoverMoviesByGenre } from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";
import { movieGenres } from "../../utils/utils";

function MovieGenre({ genre, results }) {
  const genreName = movieGenres.find((x) => x.id === parseInt(genre)).name;
  return (
    <>
      <Head>
        <title>Movies - {genreName}</title>
      </Head>
      <Layout>
        <div className="showcase-wrapper">
          <Container fluid className="showcase-container">
            <div className="item-showcase showcase-inner">
              <h1 className="sect-title">
                <span>{genreName}</span> movies
              </h1>

              <div className="showcase-inner-items">
                {results.map((movie) => (
                  <ShowcaseItem item={movie} descType="movie" key={movie.id} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default MovieGenre;

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  // const request = await discoverMoviesByGenre(genre);

  return {
    props: {
      genre: genre,
      results: dummy,
    },
  };
}
