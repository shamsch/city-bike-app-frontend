import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Paginate } from "../components/Paginate/Paginate";

describe("Testing the Paginate component for", () => {
    test("component renders and page selection works", () => {
        const onPageChange = jest.fn();
        render(
            <Paginate
                onPageChange={onPageChange}
                totalPage={10}
                initialPage={1}
            />,
        );
        expect(screen.getByTestId("paginate")).toBeDefined();

        userEvent.click(screen.getByText("2"));
        
        expect(onPageChange).toHaveBeenCalledWith(2);
    })

    test("right number of page is rendered", () => {
        const onPageChange = jest.fn();
        render(
            <Paginate
                onPageChange={onPageChange}
                totalPage={5}
                initialPage={1}
            />,
        );
        expect(screen.getByTestId("paginate")).toBeDefined();

        expect(screen.getByText("1")).toBeDefined();
        expect(screen.getByText("2")).toBeDefined();
        expect(screen.getByText("3")).toBeDefined();

        userEvent.click(screen.getByText("3"));

        expect(screen.getByText("4")).toBeDefined();
        
        userEvent.click(screen.getByText("4"));
        
        expect(screen.getByText("5")).toBeDefined();

        userEvent.click(screen.getByText("5"));
    })
}
);
