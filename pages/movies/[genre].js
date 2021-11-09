import { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { dummy } from "../../utils/dummy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { discoverMoviesByGenre } from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";
import { movieGenres } from "../../utils/utils";

function MovieGenre({ genre, genreMovies }) {
  const [allMovies, setAllMovies] = useState(genreMovies);
  const [currentMovies, setCurrentMovies] = useState(allMovies.slice(0, 20));
  const [currentPage, setCurrentPage] = useState(2);
  const [loadMore, setLoadMore] = useState(true);
  const genreName = movieGenres.find((x) => x.id === parseInt(genre)).name;

  useEffect(() => {
    if (currentMovies.length === allMovies.slice(0, currentPage * 20).length) {
      setLoadMore(false);
    }
  }, [currentMovies]);

  function loadMoreItems() {
    setCurrentMovies(allMovies.slice(0, currentPage * 20));
    setCurrentPage(currentPage + 1);
  }

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
                {currentMovies.map((movie) => (
                  <ShowcaseItem
                    item={movie}
                    descType="movie"
                    path="movie"
                    key={movie.id}
                  />
                ))}
              </div>
            </div>
            {loadMore && (
              <div
                className="load-more btn btn-red btn-w-icon"
                onClick={loadMoreItems}
              >
                <FontAwesomeIcon
                  icon={faArrowAltCircleDown}
                  className="icon icon-load-more"
                />
                Load More
              </div>
            )}
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default MovieGenre;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  /**
   * prefetch multiple pages to avoid API key visibility on fetch call on load more button
   * Temporary
   */
  const pagesToFetch = 10;
  // const getMoviesByPageCount = async (page = 1) => {
  //   const query = await discoverMoviesByGenre(genre, page);
  //   const data = query.results;

  //   if (pagesToFetch > page) {
  //     return data.concat(await getMoviesByPageCount(page + 1));
  //   } else {
  //     return data;
  //   }
  // };
  // const movieData = await getMoviesByPageCount();

  return {
    props: {
      genre: genre,
      genreMovies: dummy,
    },
  };
}
