import { dummy } from "../../utils/dummy";
import { requests } from "../../utils/requests";

function Genre({ results }) {
  console.log(results);
  return <div></div>;
}

export default Genre;

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  // add default url
  // const request = await fetch(
  //   `https://api.themoviedb.org/3${requests[genre].url}`
  // ).then((res) => res.json());

  return {
    props: {
      results: dummy,
    },
  };
}
