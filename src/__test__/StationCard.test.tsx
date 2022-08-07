import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import StationCard from "../components/Station/StationCard";
import { IStation } from "../types";
import { BrowserRouter, Route, Routes } from "react-router-dom";

describe("Testing the StationCard component for", () => {
	it("component renders and display the right content", async () => {
		const station: IStation = {
			id: 1,
			name: "Test station",
			address: "Test address",
			capacity: 10,
			lat: 60,
			lon: 20,
		};

		render(
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<StationCard station={station} />}
					/>
				</Routes>
			</BrowserRouter>,
		);

		expect(screen.getByTestId("station-card")).toBeDefined();

		expect(screen.getByText(station.name)).toBeDefined();
		expect(screen.getByTestId("address")).toHaveTextContent(
			station.address,
		);
		expect(screen.getByTestId("capacity")).toHaveTextContent(
			`Capacity ${station.capacity}`,
		);
	});
});
