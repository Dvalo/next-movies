import Head from "next/head";
import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import { actorDetailsDummy, actorCreditsDummy } from "../../utils/dummy";
import { fetchActorCombinedCredits, fetchActorDetails } from "../../utils/requests";
import ShowcaseItem from "../../components/ShowcaseItem";

function MovieSingle({ actorDetails, actorCredits }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp

  return (
    <>
      <Head>
        <title>{actorDetailsDummy[0].name}</title>
      </Head>
      <Layout>
        <div className="showcase-actor">
          <Container className="px-5 py-5" fluid>
            <div className="actor-wrapper">
              <div className="actor-image">
                <Image
                  src={`${BASE_URL}${actorDetailsDummy[0].profile_path}`}
                  alt={actorDetailsDummy[0].name}
                  objectFit="cover"
                  height={460}
                  width={306}
                />
              </div>
              <div className="actor-details">
                <div className="actor-name">{actorDetailsDummy[0].name}</div>
                <div className="actor-detail actor-birth-date">
                  <span>Birth Date:</span>
                  {new Date(actorDetailsDummy[0].birthday).toDateString()}
                </div>
                <div className="actor-detail actor-birth-place">
                  <span>Birth Location:</span>
                  {actorDetailsDummy[0].place_of_birth}
                </div>
                <div className="actor-bio">
                  {actorDetailsDummy[0].biography}
                </div>
              </div>
            </div>

            <div className="actor-known-for py-5">
              <h1 className="sect-title">
                <span>Known</span> for:
              </h1>
              <div className="item-showcase showcase-inner">
                <div className="showcase-inner-items">
                  {actorCreditsDummy.map((movie) => (
                    <ShowcaseItem
                      item={movie}
                      descType="character"
                      path={movie.media_type}
                      key={movie.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
}

export default MovieSingle;

export async function getServerSideProps(context) {
  const actorId = context.query.id;

  // const actorDetailsReq = await fetch(
  //   `https://api.themoviedb.org/3${fetchActorDetails(actorId)}`
  // ).then((res) => res.json());

  // const actorCreditsReq = await fetch(
  //   `https://api.themoviedb.org/3${fetchActorCombinedCredits(actorId)}`
  // ).then((res) => res.json());

  return {
    props: {
      actorDetails: "dummy",
      actorCredits: "dummy",
    },
  };
}
