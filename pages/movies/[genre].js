import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { discoverMoviesByGenre, requests } from "../../utils/requests";

function MovieGenre({ results }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  // console.log(results);
  return (
    <Layout>
      <div className="showcase-wrapper">
        <Container fluid className="showcase-container">
          <div className="showcase-inner">
            {results.map((movie) => (
              <div className="showcase-item" key={movie.id}>
                <div className="showcase-img">
                  <div className="showcase-language">{movie.original_language}</div>
                  <div className="showcase-certification">
                    {movie.adult ? "R" : "G"}
                  </div>
                  <div className="showcase-year">
                    {new Date(movie.release_date).getFullYear()}
                  </div>
                  <Image
                    src={`${BASE_URL}${
                      movie.backdrop_path || movie.poster_path
                    }`}
                    alt={movie.original_title}
                    layout="responsive"
                    objectFit="cover"
                    height={1080}
                    width={1920}
                  />
                </div>
                <div className="showcase-desc">{movie.overview}</div>
                <div className="showcase-title">{movie.title}</div>
              </div>
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
