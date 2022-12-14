import { IResponseStation } from "../../types";
import { StyledStationDetail } from "./StationDetailView.styled";

interface StationDetailViewProps {
	station: IResponseStation;
}

const StationDetailView = ({ station }: StationDetailViewProps) => {
	return (
		<>
			<StyledStationDetail data-testid="station-detail-view">
				<h1 className="station-name">{station.name}</h1>
				<p className="address">{station.address}</p>
				<div className="station-info">
					<div className="station-content">
						<p>
							Total return journey <b>{station.return_journey}</b>
						</p>
						<p>
							Total departure journey <b>{station.departure_journey}</b>
						</p>
						<p data-testid="avg-departure-distance">
							Average departure journey's distance{" "}
							<b>{station.average_departure_distance?.toFixed(2)}</b> km
						</p>
						<p data-testid="avg-return-distance">
							Average return journey's distance{" "}
							<b>{station.average_return_distance?.toFixed(2)}</b> km
						</p>
					</div>
					<img
						src={station.static_map_url}
						alt={station.name}
						onClick={() =>
							(window.location.href = `https://yandex.ru/maps/?ll=${station.lon},${station.lat}&z=19`)
						}
						className="static-map"
					></img>
				</div>

				<div className="top-stations">
					<div className="top-station-list">
						<p>Top five departure station from {station.name}</p>
						<ul data-testid="top-departure">
							{station.top_departure_station.map(
								(station: string, index: any) => (
									<li key={index}>{station}</li>
								)
							)}
						</ul>
					</div>
					<div className="top-station-list">
						<p>Top five return station from {station.name}</p>
						<ul data-testid="top-return">
							{station.top_return_station.map((station: string, index: any) => (
								<li key={index}>{station}</li>
							))}
						</ul>
					</div>
				</div>
			</StyledStationDetail>
		</>
	);
};

export default StationDetailView;
