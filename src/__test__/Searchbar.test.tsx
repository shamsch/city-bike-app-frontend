import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Searchbar } from "../components/Searchbar/Searchbar";

describe("Testing the Searchbar component for", () => {
	it("component renders and search works", async () => {
		const onChange = jest.fn();

		render(
			<Searchbar
				onChange={onChange}
				placeholder='Search here'
				initialValue='initialValue'
			/>,
		);

		expect(screen.getByTestId("searchbar")).toBeDefined();

        userEvent.clear(screen.getByTestId("searchbar-input"));
		userEvent.type(screen.getByTestId("searchbar-input"), "Test input");
        
        userEvent.click(screen.getByTestId("searchbar-button"));
		await waitFor(() => {
			expect(onChange).toHaveBeenCalledWith("Test input");
		});
	});
});
