import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [load, setLoad] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setLoad(load + 1);
    }, 1000);
    if (load > 10) {
      clearInterval(interval);
    }
  }, [load]);
  return (
    <>
      {/* <h1>Blurry Loading</h1> */}
      <section className="bg"></section>
      <div className="loading-text">{load}%</div>
    </>
  );
}

export default App;
