/**
 * @typedef {object} Podcast
 * @prop {string} title - The podcast title
 * @prop {string} image - the cover image URL
 * @prop {number} seasons - The number of seasons
 * @prop {string} updated - The last updated date
 * @prop {Array<number>} genres - The id's of the podcast's genres
 */

/**
 * Sorts an array of podcasts according to the given sort order state
 * @param {Array<Podcast>} podcasts
 * @param {string} sortOrder
 */
export default function sortPodcasts(podcasts, sortOrder) {
  return podcasts.sort((podA, podB) => {
    if (sortOrder === "newest") {
      return new Date(podB.updated) - new Date(podA.updated);
    } else if (sortOrder === "a-z") {
      if (podA.title < podB.title) return -1;
    } else if (podA.title > podB.title) return -1;
  });
}
