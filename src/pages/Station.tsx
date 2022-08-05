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
	const [month, setMonth] = useState("");
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axios
			.get(`https://bike-app-rest-api.herokuapp.com/api/station/${stationId}`, {
				params: {
					month: month,
				},
			})
			.then((response) => {
				setStation(response.data);
				setLoading(false);
			});
	}, [stationId, month]);

	return (
		<>
			{loading && <Loading />}
			{!loading && <MonthSelector month={month} setMonth={setMonth} />}
			{!loading && station && <StationDetailView station={station} />}
		</>
	);
};
