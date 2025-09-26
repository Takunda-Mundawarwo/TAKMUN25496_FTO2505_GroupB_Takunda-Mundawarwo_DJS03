import Logo from "../assets/echo-logo.svg";
import "../styles/Header.css";
import { genres } from "../data.js";

/**
 * The header component, containing the App logo, search, genre, and sort inputs.
 *
 * @component
 * @example <caption>Standard Usage</caption>
 * <Header
 * searchQuery={searchQuery}
 * setSearchQuery={(e) => setSearchQuery(e.target.value)}
 * genreFilter={genreFilter}
 * setGenreFilter={(e) => setGenreFilter(e.target.value)}
 * sortOrder={sortOrder}
 * setSortOrder={(e) => setSortOrder(e.target.value)}
 * />
 *
 * @param {object} props - The component props
 * @param {string} props.searchQuery - The current search query state
 * @param {function} props.setSearchQuery - The state setter function for the search query state.
 * @param {string} props.selectedGenre - The current selected genre state
 * @param {function} props.setSelectedGenre - The state setter function for the selected genre state.
 * @param {string} props.sortOrder - The sorting order state
 * @param {function} props.setSortOrder - The setter function for the sortOrder state
 * @returns {JSX.Element} - The rendered Header
 */
export default function Header(props) {
  const {
    searchQuery,
    setSearchQuery,
    genreFilter,
    setGenreFilter,
    sortOrder,
    setSortOrder,
  } = props;

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
        <select name="sortOrder" value={sortOrder} onChange={setSortOrder}>
          <option value="newest">Newest First</option>
          <option value="a-z">Sort A-Z</option>
          <option value="z-a">Sort Z-A</option>
        </select>
      </div>
    </header>
  );
}
