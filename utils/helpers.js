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
