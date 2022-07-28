import axios from "axios";
import { useEffect, useState } from "react";
import JourneyCard from "../components/Journey/JourneyCard";
import { Loading } from "../components/Loading/Loading";
import { Paginate } from "../components/Paginate/Paginate";
import { IResponseJourney } from "../types";

export const Journeys = () => {
  const [journeys, setJourneys] = useState<IResponseJourney[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  
  useEffect(() => {
    setLoading(true);
    axios.get("https://bike-app-rest-api.herokuapp.com/api/journey", {
      params: {
        page: page
      }
    }).then(response => {
      setJourneys(response.data.journeys);
      setTotalPage(response.data.total_pages);
      setLoading(false);
    })
  }, [page])

  return (
    <>
      
      {loading && <Loading />}
      {!loading && journeys.map(journey => (
        <JourneyCard key={journey.id} journey={journey} />
      ))}
      {!loading &&
        <Paginate
          onPageChange={(page) => setPage(page)}
          totalPage={totalPage}
          initialPage={page-1}
        />
      }
    </>
  )
}

