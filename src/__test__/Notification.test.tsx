import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Notification } from "../components/AddForm/Notification";

describe("Testing the Notification component for", () => {
	test("renders when show is true", () => {
		render(<Notification show={true} message="Message" type="success" />);
		expect(screen.getByTestId("notification")).toBeInTheDocument();
	}),
		test("does not render when show is false", () => {
			render(<Notification show={false} message="Message" type="success" />);
			expect(screen.queryByTestId("notification")).not.toBeInTheDocument();
		}),
		test("renders the correct message", () => {
			render(<Notification show={true} message="Message" type="success" />);
			expect(screen.getByText("Message")).toBeInTheDocument();
		});
	test("renders the correct color", () => {
		render(<Notification show={true} message="Message" type="success" />);
		expect(screen.getByTestId("notification")).toHaveStyle(
			"color: rgb(54,69,79)"
		);
	});
});
