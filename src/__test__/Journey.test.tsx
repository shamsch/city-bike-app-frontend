import { render, screen, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import { JourneyCard } from "../components/Journey/JourneyCard";
import { IResponseJourney } from "../types";
import { format } from "date-fns";


describe("Testing the JourneyCard component for", () => {
    it("renders and has the right content", async () => {
        const journey:IResponseJourney = {
            id: 1,
            departure_station: "Test departure station",
            departure_station_id: 1,
            return_station: "Test return station",
            return_station_id: 2,
            departure_time: "2020-01-01T00:00:00",
            return_time: "2020-01-01T00:00:00",
            covered_distance: 1,
            duration: 1,
            month: "Test month"
        }

        render(
            <JourneyCard
               journey={journey}
            />,
        );

        expect(screen.getByTestId("journey-card")).toBeDefined();

        expect(screen.getByTestId("departure-journey")).toHaveTextContent(`${journey.departure_station} - ${format(new Date(journey.departure_time), "dd LLL yyyy HH:mm")}`);
       
        expect(screen.getByTestId("return-journey")).toHaveTextContent(`${journey.return_station} - ${format(new Date(journey.return_time), "dd LLL yyyy HH:mm")}`);

        expect(screen.getByTestId("info")).toHaveTextContent(`Distance ${journey.covered_distance.toFixed(2)} km`);
        expect(screen.getByTestId("info")).toHaveTextContent(`Duration ${journey.duration.toFixed(2)} min`);
        expect(screen.getByTestId("info")).toHaveTextContent(`Month ${journey.month}`);
    }
    );
}
);