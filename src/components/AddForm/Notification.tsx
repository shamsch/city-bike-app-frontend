import { StyledNotification } from "./AddForm.styled";

interface NotificationProps {
	show: boolean;
	message: string;
	type: "success" | "error";
}

export const Notification = ({ show, message, type }: NotificationProps) => {
	return (
		<>
			{show && (
				<StyledNotification color={type === "success" ? "green" : "red"}>
					{message}
				</StyledNotification>
			)}
		</>
	);
};
