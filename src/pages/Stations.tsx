import StationCard from "../components/Station/StationCard"
import { IStation } from "../types"


export const Stations = () => {
  return (
    <>
        <StationCard station={dummyStation}/>
    </>
  )
}

const dummyStation: IStation = {
    id: 1,
    name: "Station 1",
    address: "Address 1",
    capacity: 1,
    lat: 1,
    lon: 1,
}
