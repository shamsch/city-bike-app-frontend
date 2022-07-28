import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StationDetailView from "../components/Station/StationDetailView";
import { IResponseStation } from "../types";


export const Station = () => {
  const params = useParams<{ id: string }>();
  const stationId = params.id;
  const [station, setStation] = useState<IResponseStation | null>(null);

  useEffect(() => {
    fetch("https://bike-app-rest-api.herokuapp.com/api/station/" + stationId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStation(data);
      })
  }, [stationId])

  return (
    <>
    {!station && <div>Loading...</div>}
    {station && <StationDetailView station={station} />}
    </>
  )
}
