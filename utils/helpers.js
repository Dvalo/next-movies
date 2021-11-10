export function removeSpaces(url) {
  return encodeURIComponent(
    decodeURIComponent(url).replace(/\s+/g, "-").toLocaleLowerCase()
  );
}

export function sortByDate(arr, descending) {
  return arr.sort((a, b) =>
    descending
      ? new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      : new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
  );
}

export function filterValidMovieItems(arr) {
  return arr.filter((item) => item.backdrop_path && item.genre_ids.length > 0);
}
