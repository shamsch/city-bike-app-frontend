import { PacmanLoader } from "react-spinners";
import { colors } from "../../utils/color";
import { StyledLoading } from "./Loading.styled";

export const Loading = () => {
	return (
		<StyledLoading data-testid='loading'>
			<PacmanLoader color={colors.primary} loading={true} />
		</StyledLoading>
	);
};
