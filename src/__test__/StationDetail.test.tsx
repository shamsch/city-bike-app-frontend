import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import StationDetailView from "../components/Station/StationDetailView";
import { IResponseStation } from "../types";

describe("Testing the StationDetailView component for", () => {
	it("should render the StationDetailView component and has the right content", async () => {
		const station: IResponseStation = {
			id: 1,
			name: "Station Name",
			address: "Address 1",
			lat: 1,
			lon: 1,
			static_map_url: "https://static-map.com/1",
			return_journey: 10,
			departure_journey: 20,
			average_departure_distance: 120,
			average_return_distance: 210,
			top_departure_station: [
				"Station 1",
				"Station 2",
				"Station 3",
				"Station 4",
				"Station 5",
			],
			top_return_station: [
				"Station 6",
				"Station 7",
				"Station 8",
				"Station 9",
				"Station 10",
			],
		};

		render(<StationDetailView station={station} />);

		expect(screen.getByTestId("station-detail-view")).toBeInTheDocument();
		expect(screen.getByText(station.name)).toBeInTheDocument();

		expect(screen.getByText(station.address)).toBeInTheDocument();
		expect(
			screen.getByText(station.return_journey.toString())
		).toBeInTheDocument();
		expect(
			screen.getByText(station.departure_journey.toString())
		).toBeInTheDocument();

		expect(screen.getByTestId("avg-departure-distance")).toHaveTextContent(
			station.average_departure_distance.toString()
		);
		expect(screen.getByTestId("avg-return-distance")).toHaveTextContent(
			station.average_return_distance.toString()
		);

		expect(
			screen.getByText(station.top_departure_station[0])
		).toBeInTheDocument();
		expect(screen.getByText(station.top_return_station[0])).toBeInTheDocument();
	});
});
