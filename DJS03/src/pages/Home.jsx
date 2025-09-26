import { useState } from "react";
import Header from "../components/Header.jsx";
import PodcastList from "../components/PodcastList.jsx";
import filterPodcasts from "../utils/filterPodcasts.js";
import sortPodcasts from "../utils/sortPodcasts.js";

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

  const filteredPodcasts = filterPodcasts(podcasts, searchQuery, genreFilter);

  const sortedPodcasts = sortPodcasts(filteredPodcasts, sortOrder);

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
      <PodcastList data={sortedPodcasts} />
    </>
  );
}
