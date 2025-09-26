import { useState } from "react";
import Header from "../components/Header.jsx";
import PodcastList from "../components/PodcastList.jsx";
import filterPodcasts from "../utils/filterPodcasts.js";
import sortPodcasts from "../utils/sortPodcasts.js";
import PaginationControls from "../components/PaginationControls.jsx";

const ITEMS_PER_PAGE = 16;

/**
 * A component that displays the podcast app's landing page, with the ability to search for podcasts,
 * filter podcasts by genre and sort podcasts.
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Home podcasts={podcasts} />
 *
 * @param {Array<Podcast>} props.podcasts - The complete array of podcasts available
 * @returns {JSX.Element} - The Landing/Home page
 */
export default function Home({ podcasts }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [genreFilter, setGenreFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPodcasts = filterPodcasts(podcasts, searchQuery, genreFilter);
  const sortedPodcasts = sortPodcasts(filteredPodcasts, sortOrder);

  const totalPages = Math.ceil(sortedPodcasts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const currentPodcasts = sortedPodcasts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={(e) => setSearchQuery(e.target.value)}
        genreFilter={genreFilter}
        setGenreFilter={(e) => setGenreFilter(e.target.value)}
        sortOrder={sortOrder}
        setSortOrder={(e) => setSortOrder(e.target.value)}
      />
      <PodcastList data={currentPodcasts} />
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
