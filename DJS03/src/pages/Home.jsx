import Header from "../components/Header.jsx";
import PodcastList from "../components/PodcastList.jsx";

export default function Home({ podcasts }) {
  return (
    <>
      <Header />
      <PodcastList data={podcasts} />
    </>
  );
}
