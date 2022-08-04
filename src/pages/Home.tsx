import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../utils/color";

export const Home = () => {
	return (
		<StyledHome>
			<div>
				<Link to="/add-journey">Add Journey</Link>
			</div>
			<div>
				<Link to="/add-station">Add Station</Link>
			</div>
		</StyledHome>
	);
};

const StyledHome = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	height: 100vh;
	margin: 10px;
	padding: 10px;

	div > a {
		color: black;
		text-decoration: none;
		background-color: ${colors.gray};
		border: none;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
		margin: 4px 2px;
		cursor: pointer;

		&:hover {
			background-color: ${colors.grayDark};
		}
	}
`;
