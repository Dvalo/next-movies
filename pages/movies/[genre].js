import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { discoverMoviesByGenre, requests } from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";

function MovieGenre({ genre, results }) {
  return (
    <>
      <Head>
        <title>
          Movies - {genre.charAt(0).toUpperCase()}
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
  // add default url
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${requests[genre].url}`
  // ).then((res) => res.json());

  return {
    props: {
      genre: genre,
      results: dummy,
    },
  };
}
