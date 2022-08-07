import { render, screen } from "@testing-library/react";
import { OrderSelect } from "../components/OrderOption/OrderSelect";
import userEvent from "@testing-library/user-event";

describe("Testing the OrderSelect component for", () => {
    test("component renders and option selection works", () => {
		const onChangeFunc = jest.fn();
		render(
			<OrderSelect
				options={[
					{ value: "asc", label: "Ascending" },
					{ value: "desc", label: "Descending" },
				]}
				onChange={onChangeFunc}
				placeholder='Select an order'
				value={{ value: "asc", label: "Ascending" }}
			/>,
		);
        expect(screen.getByTestId("order-select")).toBeDefined();

        userEvent.click(screen.getByText("Ascending"));
        userEvent.click(screen.getByText("Descending"));

        expect(onChangeFunc).toHaveBeenCalledWith({ value: "desc", label: "Descending" });
	});
});
       


