import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Journeys } from "./pages/Journeys";
import { Station } from "./pages/Station";
import { Stations } from "./pages/Stations";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stations" element={<Stations />} />
      <Route path="/stations/:id" element={<Station />} />
      <Route path="/journey" element={<Journeys />} />
    </Routes>
  );
}

export default App;
