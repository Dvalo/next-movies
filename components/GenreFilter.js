import React from "react";
import { movieGenres, tvGenres } from "../utils/utils";

function GenreFilter({ filterType }) {
  const filterThrough = filterType === "movies" ? movieGenres : tvGenres;

  return (
    <div className="filters">
      <div className="filters-wrapper">
        <div className="filters-wrapper-inner">
          {filterThrough.map(({ name, id }) => (
            <a
              href={`/${filterType}/${id}`}
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
