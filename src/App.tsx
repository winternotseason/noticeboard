import "./App.css";
import { useMediaQuery } from "react-responsive";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });
  return <div className="App"></div>;
}

export default App;
