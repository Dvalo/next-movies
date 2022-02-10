import Head from "next/head";
import Layout from "../../layout/Layout";
import ShowcaseSingle from "../../components/ShowcaseSingle";
import TvSeasons from "../../components/TvSeasons";
import {
  fetchTvShowActorsById,
  fetchTvShowById,
  fetchTvShowVideosById,
} from "../../utils/requests";

function TvSingle({ tvShowDetails, tvShowCredits, tvShowVideos }) {
  return (
    <>
      <Head>
        <title>
          {tvShowDetails.name} (
          {new Date(tvShowDetails.first_air_date).getFullYear()})
        </title>
      </Head>
      <Layout>
        <ShowcaseSingle
          type="tv"
          showcase={tvShowDetails}
          videos={tvShowVideos}
          cast={tvShowCredits}
        />
        <TvSeasons seasons={tvShowDetails.seasons} />
      </Layout>
    </>
  );
}

export default TvSingle;

export async function getServerSideProps(context) {
  const tvShowId = context.query.id;

  const tvShowDetails = await fetchTvShowById(tvShowId);
  const tvShowCredits = await fetchTvShowActorsById(tvShowId);
  const tvShowVideos = await fetchTvShowVideosById(tvShowId);

  if (tvShowDetails.success !== undefined && !tvShowDetails.success) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tvShowDetails: tvShowDetails,
      tvShowCredits: tvShowCredits,
      tvShowVideos: tvShowVideos,
    },
  };
}
