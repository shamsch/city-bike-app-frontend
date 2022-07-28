import { IResponseStation } from "../../types"
import { StyledStationCard } from "./StationCard.styled"
import { StyledStationDetail } from "./StationDetailView.styled"

interface StationDetailViewProps {
  station: IResponseStation
}

const StationDetailView = ({ station }: StationDetailViewProps) => {

  return (
    <>
      <StyledStationDetail>
        <h1 className="station-name">{station.name}</h1>
        <p className="address">{station.address}</p>
        <div className="station-info">
          <div className="station-content">
            <p>Total return journey <b>{station.return_journey}</b></p>
            <p>Total departure journey <b>{station.departure_journey}</b></p>
            <p>Average departure journey's distance <b>{station.average_departure_distance.toFixed(2)}</b> km</p>
            <p>Average return journey's distance <b>{station.average_return_distance.toFixed(2)}</b> km</p>
          </div>
          <img
            src={station.static_map_url}
            alt={station.name}
            className="static-map"
          ></img>
        </div>


        <div className="top-station-list">
          <p>Top five departure station from {station.name}</p>
          <ul>
            {station.top_departure_station.map((station: any, index: any) => (
              <li key={index}>{station}</li>
            ))}
          </ul>
        </div>
        <div className="top-station-list"><p>Top five return station from {station.name}</p>
          <ul>
            {station.top_return_station.map((station: any, index: any) => (
              <li key={index}>{station}</li>
            ))}
          </ul></div>


      </StyledStationDetail>
    </>
  )
}

export default StationDetailView