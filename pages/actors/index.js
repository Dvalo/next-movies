import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { fetchTrendingActors } from "../../utils/requests";
import ActorItem from "../../components/ActorItem";

function Actors({ trendingActors }) {
  return (
    <>
      <Head>
        <title>Trending Actors</title>
      </Head>
      <Layout>
        <div className="showcase-wrapper">
          <Container fluid className="showcase-container">
            <div className="showcase-inner">
              <h1 className="sect-title">
                <span>Trending</span> Actors
              </h1>

              <div className="showcase-inner-items showcase-inner-items--actors">
                {trendingActors.map((actor) => (
                  <ActorItem actor={actor} key={actor.id} />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default Actors;

export async function getServerSideProps(context) {
  const pagesToFetch = 3;

  const getTrendingActorsByPageCount = async (page = 1) => {
    const query = await fetchTrendingActors(page);
    const data = query.results;

    if (pagesToFetch > page) {
      return data.concat(await getTrendingActorsByPageCount(page + 1));
    } else {
      return data;
    }
  };

  const trendingActors = await getTrendingActorsByPageCount();

  return {
    props: {
      trendingActors: trendingActors,
    },
  };
}
