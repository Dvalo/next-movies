import Link from "next/link";
import { Container } from "react-bootstrap";
import TvSeasonItem from "./TvSeasonItem";

function TvSeasons({ seasons }) {
  return (
    <div className="showcase-seasons">
      <Container className="px-5" fluid>
        <h1 className="sect-title">
          <span>Seasons</span>
        </h1>
        {seasons.map((season) => (
          <TvSeasonItem season={season} key={season.id} />
        ))}
      </Container>
    </div>
  );
}

export default TvSeasons;
