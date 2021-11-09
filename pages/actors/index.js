import Head from "next/head";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { actorsDummy } from "../../utils/dummy";
import {
  discoverMoviesByGenre,
  fetchActorDetails,
  fetchTrendingActors,
  requests,
} from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";
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
                {trendingActors[0].results.map((actor) => (
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
  // const trendingActors = await fetchTrendingActors();

  return {
    props: {
      trendingActors: actorsDummy,
    },
  };
}
