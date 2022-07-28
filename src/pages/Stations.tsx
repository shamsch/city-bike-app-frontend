import { useEffect, useState } from "react"
import StationCard from "../components/Station/StationCard"
import { IStation } from "../types"


export const Stations = () => {
  const [stations, setStations] = useState<IStation[]>([])

  useEffect(() => {
    fetch("https://bike-app-rest-api.herokuapp.com/api/station")
      .then(response => response.json())
      .then(data => {
        setStations(data)
      })
  }, [])

  return (
    <>
      {stations.map(station => (
        <StationCard key={station.id} station={station} />
      ))}
    </>
  )
}


