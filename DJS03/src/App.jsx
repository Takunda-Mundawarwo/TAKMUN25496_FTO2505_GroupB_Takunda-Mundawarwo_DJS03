import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";
import fetchData from "./data.js";

function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetchData(setPodcasts, setIsLoading, setHasError);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
}

export default App;
