import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import { MonthSelector } from "../components/MonthSelector/MonthSelector";
import StationDetailView from "../components/Station/StationDetailView";
import { IResponseStation } from "../types";

export const Station = () => {
	const params = useParams<{ id: string }>();
	const stationId = params.id;
	const [station, setStation] = useState<IResponseStation | null>(null);
	const [month, setMonth] = useState("May");

	useEffect(() => {
		console.log("fetched station");
		axios
			.get(`https://bike-app-rest-api.herokuapp.com/api/station/${stationId}`, {
				params: {
					month: month,
				},
			})
			.then((response) => {
				setStation(response.data);
			});
	}, [stationId, month]);

	return (
		<>
			{!station && <Loading />}
			{station && <MonthSelector month={month} setMonth={setMonth} />}
			{station && <StationDetailView station={station} />}
		</>
	);
};
