import { useState } from "react";
import Header from "../components/Header.jsx";
import PodcastList from "../components/PodcastList.jsx";

/**
 * A component that displays the podcast app's landing page, with the ability to search for podcasts
 *
 * @component
 * @example <caption>Basic Usage</caption>
 * <Home podcasts={podcasts} />
 *
 * @param {Array<Podcast>} - The complete array of podcasts available
 * @returns {JSX.Element} - The Landing/Home page
 */

export default function Home({ podcasts }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPodcasts = podcasts.filter((podcast) =>
    podcast.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={(e) => setSearchQuery(e.target.value)}
      />
      <PodcastList data={filteredPodcasts} />
    </>
  );
}
