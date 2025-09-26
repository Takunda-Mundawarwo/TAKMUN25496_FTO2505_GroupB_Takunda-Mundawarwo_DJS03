import Logo from "../assets/echo-logo.svg";
import "../styles/Header.css";
import { genres } from "../data.js";

/**
 * The header component, containing the App logo and search input.
 *
 * @param {object} props - The component props
 * @param {string} props.searchQuery - The current search query state
 * @param {function} props.setSearchQuery - The state setter function for the search query state.
 * @param {string} props.selectedGenre - The current selected genre state
 * @param {function} props.setSelectedGenre - The state setter function for the selected genre state.
 * @returns {JSX.Element} - The rendered Header
 */
export default function Header({
  searchQuery,
  setSearchQuery,
  genreFilter,
  setGenreFilter,
}) {
  return (
    <header>
      <div className="header-title">
        <img src={Logo} alt="Echo Logo" width="48" />
        <h1>Echo</h1>
      </div>
      <div className="header-filters">
        <input
          name="search"
          type="search"
          className="search"
          value={searchQuery}
          onChange={setSearchQuery}
        />
        <select
          name="genreFilter"
          value={genreFilter}
          onChange={setGenreFilter}
        >
          <option value="All">All</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
}
