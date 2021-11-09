export function removeSpaces(url) {
  return encodeURIComponent(
    decodeURIComponent(url).replace(/\s+/g, "-").toLocaleLowerCase()
  );
}
