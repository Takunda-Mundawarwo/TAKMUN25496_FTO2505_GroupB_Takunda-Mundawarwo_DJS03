import { useState } from "react";
import "./App.css";
import Loading from "./components/Loading.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return <>{isLoading && <Loading onClick={() => setIsLoading(false)} />}</>;
}

export default App;
