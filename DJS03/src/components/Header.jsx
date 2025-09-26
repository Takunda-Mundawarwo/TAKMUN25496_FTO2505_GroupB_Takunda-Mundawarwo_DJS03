import Logo from "../assets/echo-logo.svg";
import "../styles/Header.css";

/**
 * The header component, containing the App logo and search input.
 *
 * @param {object} props - The component props
 * @param {string} props.searchQuery - The current search query state
 * @param {function} props.setSearchQuery - The state setter function for the search query state.
 * @returns {JSX.Element} - The rendered Header
 */
export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header>
      <div className="header-title">
        <img src={Logo} alt="Echo Logo" width="48" />
        <h1>Echo</h1>
      </div>
      <div className="header-filters">
        <input
          type="search"
          className="search"
          value={searchQuery}
          onChange={setSearchQuery}
        />
      </div>
    </header>
  );
}
