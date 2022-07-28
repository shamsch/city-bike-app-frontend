import { useEffect, useState } from "react"
import { Loading } from "../components/Loading/Loading"
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
      {!stations.length && <Loading />}
      {stations.map(station => (
        <StationCard key={station.id} station={station} />
      ))}
    </>
  )
}


