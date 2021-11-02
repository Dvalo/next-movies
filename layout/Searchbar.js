import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  return (
    <div className="secondary-searchbar">
      <div className="secondary-logo">
        <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
          <Image
            src="/logo.svg"
            alt="TMDB"
            height={50}
            width={150}
          />
        </a>
      </div>
      <form
        id="searchMovie"
        className="mov-searchbar"
        action="/search"
        autoComplete="off"
      >
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} className="icon icon-search" />
        </button>
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          placeholder="Search something here..."
        />
      </form>
    </div>
  );
}

export default Searchbar;
