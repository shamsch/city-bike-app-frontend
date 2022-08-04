import styled from "styled-components";
import { colors } from "../../utils/color";

export const AddFormStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 97%;
	height: 100%;
	background-color: ${colors.secondaryLight};
	padding: 20px;
	border-radius: 10px;
	margin-top: 20px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

	.form-group {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		padding: 10px;
	}

	.date-picker {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 10px 0px;
	}

	.submit-btn {
		width: 100%;
		height: 50px;
		background-color: ${colors.primaryLight};
		border: none;
		border-radius: 10px;
		color: ${colors.secondary};
		font-size: 20px;
		font-weight: bold;
		cursor: pointer;
		margin: 20px 0;
		transition: all 0.3s ease-in-out;
		&:hover {
			background-color: ${colors.primary};
		}
	}

	.error {
		color: ${colors.error};
		font-size: 24px;
		margin: 10px 0;
	}
`;

export const StyledNotification = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 20px;
	border-radius: 10px;
	margin-top: 20px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	background-color: ${(props) => props.color};
	color: ${colors.black};
	font-size: 24px;
	font-weight: bold;
	text-align: center;
`;
