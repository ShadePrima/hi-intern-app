import "./scss/app.scss";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Voting from "./pages/Voting/Voting";
import Breeds from "./pages/Breeds/Breeds";
import Gallery from "./pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/voting" element={<Voting />} />
        <Route path="/breeds" element={<Breeds />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  );
}

export default App;
