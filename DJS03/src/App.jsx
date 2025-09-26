import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import Error from "./components/Error.jsx";
import fetchData from "./data.js";
import Home from "./pages/Home.jsx";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorState, setHasError] = useState({ hasError: false, message: "" });

  useEffect(() => {
    fetchData(setPodcasts, setIsLoading, setHasError);
  }, []);

  if (isLoading) return <Loading />;

  if (errorState.hasError) return <Error message={errorState.message} />;

  return <Home podcasts={podcasts} />;
}

export default App;
