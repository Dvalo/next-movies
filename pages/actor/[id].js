import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../layout/Layout";
import { Container } from "react-bootstrap";
import ShowcaseItem from "../../components/ShowcaseItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import {
  fetchActorCombinedCredits,
  fetchActorDetails,
} from "../../utils/requests";
import { sortByDate } from "../../utils/helpers";

function MovieSingle({ actorDetails, actorCredits }) {
  const [allCredits, setAllCredits] = useState(sortByDate(actorCredits.cast, true));
  const [currentPage, setCurrentPage] = useState(2);
  const [currentCredits, setCurrentCredits] = useState(allCredits.slice(0, 20));
  const [loadMore, setLoadMore] = useState(true);
  const BASE_URL = "https://image.tmdb.org/t/p/original"; // temp

  useEffect(() => {
    if (
      currentCredits.length === allCredits.slice(0, currentPage * 20).length
    ) {
      setLoadMore(false);
    }
  }, [allCredits, currentCredits, currentPage]);

  function loadMoreItems() {
    setCurrentPage(currentPage + 1);
    setCurrentCredits(allCredits.slice(0, currentPage * 20));
  }

  return (
    <>
      <Head>
        <title>{actorDetails.name}</title>
      </Head>
      <Layout>
        <div className="showcase-actor">
          <Container className="px-5 py-5" fluid>
            <div className="actor-wrapper">
              <div className="actor-image">
                <Image
                  src={`${BASE_URL}${actorDetails.profile_path}`}
                  alt={actorDetails.name}
                  objectFit="cover"
                  height={460}
                  width={306}
                />
              </div>
              <div className="actor-details">
                <div className="actor-name">{actorDetails.name}</div>
                <div className="actor-detail actor-birth-date">
                  <span>Birth Date:</span>
                  {new Date(actorDetails.birthday).toDateString()}
                </div>
                <div className="actor-detail actor-birth-place">
                  <span>Birth Location:</span>
                  {actorDetails.place_of_birth}
                </div>
                <div className="actor-bio">{actorDetails.biography}</div>
              </div>
            </div>

            <div className="actor-known-for py-5">
              <h1 className="sect-title">
                <span>Known</span> for:
              </h1>
              <div className="item-showcase showcase-inner">
                <div className="showcase-inner-items">
                  {currentCredits.map((movie) => (
                    <ShowcaseItem
                      item={movie}
                      descType="character"
                      path={movie.media_type}
                      key={movie.credit_id}
                    />
                  ))}
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

  const actorDetails = await fetchActorDetails(actorId);
  const actorCredits = await fetchActorCombinedCredits(actorId);

  if (actorDetails.success !== undefined && !actorDetails.success) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      actorDetails: actorDetails,
      actorCredits: actorCredits,
    },
  };
}
