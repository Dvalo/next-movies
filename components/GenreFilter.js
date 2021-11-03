import React from "react";
import { movieGenres, removeSpaces } from "../utils/utils";

function GenreFilter() {
  return (
    <div className="filters">
      <div className="filters-wrapper">
        <div className="filters-wrapper-inner">
          {movieGenres.map(({ name, id }) => (
            <a
              href={`/movies/${removeSpaces(name)}`}
              className="filter"
              key={id}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenreFilter;
