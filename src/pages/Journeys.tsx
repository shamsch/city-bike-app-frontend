import axios from "axios";
import { useEffect, useState } from "react";
import JourneyCard from "../components/Journey/JourneyCard";
import { Loading } from "../components/Loading/Loading";
import { OrderSelect } from "../components/OrderOption/OrderSelect";
import { Paginate } from "../components/Paginate/Paginate";
import { Range } from "../components/Range/Range";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { maxValueStore } from "../store/maxValueStore";
import { IResponseJourney } from "../types";
import { journeyColumns, order } from "../utils/optionsForSelect";

export const Journeys = () => {
	const [journeys, setJourneys] = useState<IResponseJourney[]>([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [totalPage, setTotalPage] = useState(1);
	const [searchValue, setSearchValue] = useState("");
	const [distanceRange, setDistanceRange] = maxValueStore((state) => [
		state.maxDistance,
		state.setMaxDistance,
	]);
	const [durationRange, setDurationRange] = maxValueStore((state) => [
		state.maxDuration,
		state.setMaxDuration,
	]);
	const [orderBy, setOrderBy] = useState(journeyColumns[0]);
	const [orderDirection, setOrderDirection] = useState(order[0]);

	useEffect(() => {
		setLoading(true);
		axios
			.get("https://bike-app-rest-api.herokuapp.com/api/journey", {
				params: {
					page: page,
					search: searchValue,
					distanceMin: distanceRange[0],
					distanceMax: distanceRange[1],
					durationMin: durationRange[0],
					durationMax: durationRange[1],
					orderBy: orderBy.value,
					orderDir: orderDirection.value,
				},
			})
			.then((response) => {
				setJourneys(response.data.journeys);
				setTotalPage(response.data.total_pages);
				if (page > totalPage) {
					setPage(totalPage);
				}
				setLoading(false);
			});
	}, [
		page,
		searchValue,
		distanceRange,
		durationRange,
		orderBy,
		orderDirection,
	]);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<Searchbar
					initialValue={searchValue}
					placeholder="Search by station i.e Lastenlehto, or month i.e May"
					onChange={(val) => setSearchValue(val)}
				/>
			)}
			{!loading && (
				<Range
					title="Distance"
					unit="km"
					max={distanceRange[1]}
					min={distanceRange[0]}
					step={0.1}
					onSubmit={(val) => setDistanceRange(val)}
				/>
			)}
			{!loading && (
				<Range
					title="Duration"
					unit="min"
					max={durationRange[1]}
					min={durationRange[0]}
					step={1}
					onSubmit={(val) => setDurationRange(val)}
				/>
			)}
			{!loading && (
				<OrderSelect
					placeholder="Order by"
					options={journeyColumns}
					value={orderBy}
					onChange={(val) => setOrderBy(val)}
				/>
			)}
			{!loading && (
				<OrderSelect
					placeholder="Order direction"
					options={order}
					value={orderDirection}
					onChange={(val) => setOrderDirection(val)}
				/>
			)}
			{!loading &&
				journeys.map((journey) => (
					<JourneyCard key={journey.id} journey={journey} />
				))}
			{!loading && (
				<Paginate
					onPageChange={(page) => setPage(page)}
					totalPage={totalPage}
					initialPage={page - 1}
				/>
			)}
		</>
	);
};
