import { render, screen } from "@testing-library/react";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import userEvent from '@testing-library/user-event'

describe("Testing the MonthSelector component for", () => {
	test("renders the month selector", () => {
		const fn = jest.fn();
		render(<MonthSelector setMonth={fn} month='January' />);
		expect(screen.getByTestId("month-selector")).toBeDefined();
	});

	test("selecting a month works", () => {
		const fn = jest.fn();
		render(<MonthSelector setMonth={fn} month='January' />);
		const monthSelector = screen.getByTestId("month-selector");
		userEvent.selectOptions(monthSelector, 'February');
        expect(fn).toHaveBeenCalledWith('February');
	});
});
