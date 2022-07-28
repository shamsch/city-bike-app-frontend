import { useEffect, useState } from "react";
import JourneyCard from "../components/Journey/JourneyCard";
import { Loading } from "../components/Loading/Loading";
import { IResponseJourney } from "../types";

export const Journeys = () => {
  const [journeys, setJourneys] = useState<IResponseJourney[]>([]);
  useEffect(()=>{
    fetch("https://bike-app-rest-api.herokuapp.com/api/journey")
      .then(response => response.json())
      .then(data => {
        setJourneys(data)
      })
  }, [])
  return (
    <>
      {!journeys.length && <Loading />}
      {journeys.map(journey => (
        <JourneyCard key={journey.id} journey={journey} />
      ))}
    </>
  )
}

