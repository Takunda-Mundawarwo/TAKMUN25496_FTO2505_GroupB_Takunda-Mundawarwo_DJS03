import "../styles/PodcastPreview.css";
import Genre from "./Genre.jsx";

/**
 * @typedef {object} - PodcastProps
 * @prop {number} id
 * @prop {string} title
 * @prop {string} image - the cover image URL
 * @prop {number} seasons
 * @prop {string} updated
 * @prop {Array<number>} genres
 */

/**
 *
 * @param {PodcastProps} props
 * @returns {JSX.Element} - An article element, representing the podcast.
 */
export default function PodcastPreview(props) {
  const updatedDate = new Date(props.updated);
  const genres = props.genres.split(",");

  return (
    <article className="podcast">
      <img
        src={props.image}
        alt="{props.title} Cover Image"
        className="image"
      />
      <h2>{props.title}</h2>
      <h4>
        {props.seasons} Seasons | Updated: {updatedDate.toDateString()}
      </h4>
      <ul className="genres">
        genres.map((genre) => <Genre key={genre} />)
      </ul>
    </article>
  );
}
