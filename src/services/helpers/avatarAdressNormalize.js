export function normalizeAvatar(string, match) {
  return string.includes(match)
    ? string.slice(1)
    : `https://image.tmdb.org/t/p/w500${string}`;
}
