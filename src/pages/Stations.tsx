import axios from "axios"
import { useEffect, useState } from "react"
import { Loading } from "../components/Loading/Loading"
import { Paginate } from "../components/Paginate/Paginate"
import StationCard from "../components/Station/StationCard"
import { IStation } from "../types"


export const Stations = () => {
  const [stations, setStations] = useState<IStation[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  useEffect(() => {
    setLoading(true)
    axios.get("https://bike-app-rest-api.herokuapp.com/api/station", {
      params: {
        page: page
      }
    })
      .then(response => {
        setStations(response.data.stations)
        setTotalPage(response.data.total_pages)
        setLoading(false)
      }
      )
  }, [page])

  return (
    <>
      {loading && <Loading />}
      {!loading && stations.map(station => (
        <StationCard key={station.id} station={station} />
      ))}
      {!loading &&
        <Paginate
          onPageChange={(page) => setPage(page)}
          totalPage={totalPage}
          initialPage={page - 1}
        />
      }
    </>
  )
}

//pagination done
