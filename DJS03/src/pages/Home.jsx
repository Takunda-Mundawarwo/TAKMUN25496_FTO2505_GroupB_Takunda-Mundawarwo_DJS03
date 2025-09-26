import { useState } from "react";
import Header from "../components/Header.jsx";
import PodcastList from "../components/PodcastList.jsx";

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

  //Filtering based on search query and selected genre filter
  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (podcast.genres.includes(Number(genreFilter)) || genreFilter === "All")
  );

  //Sorting filtered podcasts according to selected sort order
  filteredPodcasts.sort((podA, podB) => {
    if (sortOrder === "newest") {
      return new Date(podB.updated) - new Date(podA.updated);
    } else if (sortOrder === "a-z") {
      if (podA.title < podB.title) return -1;
    } else if (podA.title > podB.title) return -1;
  });

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
      <PodcastList data={filteredPodcasts} />
    </>
  );
}
