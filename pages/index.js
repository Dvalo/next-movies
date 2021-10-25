/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import { Container } from "react-bootstrap";
import MainSlider from "../components/MainSlider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Movies App - Next.js</title>
        <meta name="description" content="Movies App made with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MainSlider />
        <Container>
          <div className="filters">
            <div className="filters-wrapper">
              <div className="filter">Trending</div>
              <div className="filter">Top Rated</div>
              <div className="filter">Action</div>
              <div className="filter">Comedy</div>
              <div className="filter">Horror</div>
              <div className="filter">Romance</div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
