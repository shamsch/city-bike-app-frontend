import { optionsForMonth } from "../../utils/optionsForSelect";
import { StyledMonthSelector } from "./MonthSelector.styled";

interface MonthSelectorProps {
	setMonth: (month: string) => void;
	month: string;
}

export const MonthSelector = ({ setMonth, month }: MonthSelectorProps) => {
	return (
		<StyledMonthSelector>
			<h1>Select month</h1>
			<select
				onChange={(e) => {
					setMonth(e.target.value);
				}}
				value={month}
				data-testid="month-selector"
			>
				{optionsForMonth.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</StyledMonthSelector>
	);
};
