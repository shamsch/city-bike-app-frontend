import axios from "axios"
import { useEffect, useState } from "react"
import { Loading } from "../components/Loading/Loading"
import StationCard from "../components/Station/StationCard"
import { IStation } from "../types"


export const Stations = () => {
  const [stations, setStations] = useState<IStation[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get("https://bike-app-rest-api.herokuapp.com/api/station")
      .then(response => {
        setStations(response.data.stations)
        setLoading(false)
      }
      )
  }, [])

  return (
    <>
      {loading && <Loading />}
      {!loading && stations.map(station => (
        <StationCard key={station.id} station={station} />
      ))}
    </>
  )
}


