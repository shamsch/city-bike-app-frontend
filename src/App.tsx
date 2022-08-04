import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Journeys } from "./pages/Journeys";
import { Stations } from "./pages/Stations";
import { Station } from "./pages/Station";
import { GlobalStyles } from "./globalStyles";
import { AddJourney } from "./components/AddForm/AddJourney";
import { AddStation } from "./components/AddForm/AddStation";

function App() {
	return (
		<>
			<GlobalStyles />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stations" element={<Stations />} />
				<Route path="/stations/:id" element={<Station />} />
				<Route path="/journey" element={<Journeys />} />
				<Route path="/add-journey" element={<AddJourney />} />
				<Route path="/add-station" element={<AddStation />} />
			</Routes>
		</>
	);
}

export default App;
