import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../components/Loading/Loading";
import StationDetailView from "../components/Station/StationDetailView";
import { IResponseStation } from "../types";


export const Station = () => {
  const params = useParams<{ id: string }>();
  const stationId = params.id;
  const [station, setStation] = useState<IResponseStation | null>(null);

  useEffect(() => {
    axios.get("https://bike-app-rest-api.herokuapp.com/api/station/", {
      params: {
        id: stationId
      }
    }).then(response => {
      setStation(response.data.station);
    }
    )
  }, [stationId])

  return (
    <>
    {!station && <Loading/>}
    {station && <StationDetailView station={station} />}
    </>
  )
}
