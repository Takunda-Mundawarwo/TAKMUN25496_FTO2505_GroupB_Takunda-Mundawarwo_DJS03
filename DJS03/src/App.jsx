import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import Error from "./components/Error.jsx";
import fetchData from "./data.js";
import Header from "./components/Header.jsx";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData(setPodcasts, setIsLoading, setHasError);
  }, []);

  if (isLoading) return <Loading />;

  if (hasError) return <Error />;

  return <Header />;
}

export default App;
