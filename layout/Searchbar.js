import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Searchbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleChange = (setValue) => (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: "/search",
      query: { searchterm: query },
    });
  };

  return (
    <div className="secondary-searchbar">
      <div className="secondary-logo">
        <a
          className="d-flex"
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Image src="/logo.svg" alt="TMDB" height={50} width={150} />
        </a>
      </div>
      <form
        id="searchMovie"
        className="mov-searchbar"
        onSubmit={(e) => handleSubmit(e)}
      >
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} className="icon icon-search" />
        </button>
        <input
          type="text"
          id="search"
          name="search"
          autoComplete="off"
          onChange={handleChange(setQuery)}
          placeholder="Search for a movie, tv show, actor..."
        />
      </form>
    </div>
  );
}

export default Searchbar;
