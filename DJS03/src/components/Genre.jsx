import genres from "../data.js";

/**
 * @typedef {Object} GenreProps
 * @property {string} key - The genre's id
 * @property {string} [className=''] Optional CSS class name for styling.
 */

/**
 * A component that displays a genre name
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Genre key="1" />
 *
 * @param {GenreProps} props - The props for the genre component
 * @returns {JSX.Element} - A list element displaying the genre name
 */
export default function Genre(props) {
  const genre = genres.find((genre) => genre.id == props.key);
  return <li style={genreStyles}>{genre.title}</li>;
}

const genreStyles = {
  backgroundColor: "var(--orange)",
  color: "var(--dark-blue)",
  fontWeight: "500",
  fontSize: "0.7rem",
  padding: "0.5rem",
  margin: "0.25rem 0",
  borderRadius: "0.5rem",
};
