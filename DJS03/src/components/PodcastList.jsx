import "../styles/PodcastList.css";
import PodcastPreview from "./PodcastPreview.jsx";

/**
 * @typedef {object} Podcast
 * @prop {string} title - The podcast title
 * @prop {string} image - the cover image URL
 * @prop {number} seasons - The number of seasons
 * @prop {string} updated - The last updated date
 * @prop {Array<number>} genres - The id's of the podcast's genres
 */

/**
 * @typedef {object} PodcastListProps
 * @prop {Array<Podcast>} data - The list of podcasts
 */

/**
 * A component that display the podcast preview list
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <PodcastList data={podcasts} />
 *
 * @param {PodcastListProps} props
 * @returns {JSX.Element} - A section element displaying the podcast list
 */
export default function PodcastList(props) {
  return (
    <section className="podcast-list">
      {props.data.map((podcast) => (
        <PodcastPreview key={podcast.id} {...podcast} />
      ))}
    </section>
  );
}
