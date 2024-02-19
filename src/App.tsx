import "./App.css";
import { useMediaQuery } from "react-responsive";
import Container from "./components/Container";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width : 768px) and (max-width:1920px)",
  });

  return (
    <div className="container">{isPC ? <div>pc</div> : <Container />}</div>
  );
}

export default App;
