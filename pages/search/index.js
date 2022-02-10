import Head from "next/head";
import { Container } from "react-bootstrap";
import ActorItem from "../../components/ActorItem";
import ShowcaseItem from "../../components/ShowcaseItem";
import Layout from "../../layout/Layout";
import { searchMultiByTerm } from "../../utils/requests";

function SearchPage({ searchTerm, searchResults }) {
  const movieSearchResults = searchResults.filter(
    (item) => item.media_type === "movie"
  );
  const tvSearchResults = searchResults.filter(
    (item) => item.media_type === "tv"
  );
  const actorSearchResults = searchResults.filter(
    (item) => item.media_type === "person"
  );

  return (
    <>
      <Head>
        <title>Search - {searchTerm}</title>
      </Head>
      <Layout>
        <Container fluid className="showcase-container">
          {movieSearchResults && movieSearchResults.length > 0 && (
            <div className="item-showcase showcase-inner showcase-movies">
              <h1 className="sect-title pb-3">
                <span>movies</span>
              </h1>
              <div className="showcase-inner-items">
                {movieSearchResults.map((movie) => (
                  <ShowcaseItem
                    item={movie}
                    descType="movie"
                    path="movie"
                    key={movie.id}
                  />
                ))}
              </div>
            </div>
          )}
          {tvSearchResults && tvSearchResults.length > 0 && (
            <div className="item-showcase showcase-inner showcase-tvshows py-5">
              <h1 className="sect-title pb-3">
                <span>tv shows</span>
              </h1>
              <div className="showcase-inner-items">
                {tvSearchResults.map((movie) => (
                  <ShowcaseItem
                    item={movie}
                    descType="movie"
                    path="tv"
                    key={movie.id}
                  />
                ))}
              </div>
            </div>
          )}
          {actorSearchResults && actorSearchResults.length > 0 && (
            <div className="showcase-inner showcase-actors py-5">
              <h1 className="sect-title pb-3">
                <span>actors</span>
              </h1>
              <div className="showcase-inner-items showcase-inner-items--actors">
                {actorSearchResults.map((actor) => (
                  <ActorItem actor={actor} key={actor.id} />
                ))}
              </div>
            </div>
          )}
        </Container>
      </Layout>
    </>
  );
}

export default SearchPage;

export async function getServerSideProps(context) {
  const searchTerm = context.query.searchterm;
  /**
   * prefetch multiple pages to avoid API key visibility on fetch call on load more button
   * Temporary
   */
  const pagesToFetch = 6;
  const getSearchResults = async (page = 1) => {
    const query = await searchMultiByTerm(searchTerm, page);
    const data = query.results;
    if (pagesToFetch > page) {
      return data.concat(await getSearchResults(page + 1));
    } else {
      return data;
    }
  };
  const searchRes = await getSearchResults();

  if (!searchRes.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      searchTerm: searchTerm,
      searchResults: searchRes,
    },
  };
}
