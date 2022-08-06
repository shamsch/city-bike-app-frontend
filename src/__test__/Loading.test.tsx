import { render, screen } from "@testing-library/react";
import { Loading } from "../components/Loading/Loading";

describe("Testing the Loading component for", () => {
	test("should render the loading component", () => {
		render(<Loading />);
		expect(screen.getByTestId("loading")).toBeDefined();
	});
});
