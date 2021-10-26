import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { discoverMoviesByGenre, requests } from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";

function MovieGenre({ results }) {
  return (
    <Layout>
      <div className="showcase-wrapper">
        <Container fluid className="showcase-container">
          <div className="item-showcase showcase-inner">
            {results.map((movie) => (
              <ShowcaseItem item={movie} key={movie.id} />
            ))}
          </div>
        </Container>
      </div>
    </Layout>
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
      results: dummy,
    },
  };
}
