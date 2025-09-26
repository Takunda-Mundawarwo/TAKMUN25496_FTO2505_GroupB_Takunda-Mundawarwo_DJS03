/**
 * @typedef {object} Podcast
 * @prop {string} title - The podcast title
 * @prop {string} image - the cover image URL
 * @prop {number} seasons - The number of seasons
 * @prop {string} updated - The last updated date
 * @prop {Array<number>} genres - The id's of the podcast's genres
 */

/**
 * Filters an array of podcasts according to the search query and genre state
 * @param {Array<Podcast>} podcasts - The array of all available podcasts
 * @param {string} searchQuery - The current search query
 * @param {string} genreFilter - The current genre filter
 * @returns {Array} - The filtered array of podcasts
 */
export default function filterPodcasts(podcasts, searchQuery, genreFilter) {
  return podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (podcast.genres.includes(Number(genreFilter)) || genreFilter === "All")
  );
}
