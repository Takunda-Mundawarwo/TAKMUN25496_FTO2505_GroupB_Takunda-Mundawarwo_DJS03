import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import Error from "./components/Error.jsx";
import fetchData from "./data.js";
import Header from "./components/Header.jsx";
import PodcastList from "./components/PodcastList.jsx";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setHasError] = useState({ hasError: false, message: "" });

  useEffect(() => {
    fetchData(setPodcasts, setIsLoading, setHasError);
  }, []);

  if (isLoading) return <Loading />;

  if (errorState.hasError) return <Error message={errorState.message} />;

  console.log(podcasts);
  return (
    <>
      <Header />
      <PodcastList data={podcasts} />
    </>
  );
}

export default App;
