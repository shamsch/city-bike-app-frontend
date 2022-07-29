import axios from "axios";
import { useEffect, useState } from "react";
import JourneyCard from "../components/Journey/JourneyCard";
import { Loading } from "../components/Loading/Loading";
import { Paginate } from "../components/Paginate/Paginate";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { IResponseJourney } from "../types";

export const Journeys = () => {
  const [journeys, setJourneys] = useState<IResponseJourney[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get("https://bike-app-rest-api.herokuapp.com/api/journey", {
      params: {
        page: page, 
        search: searchValue
      }
    }).then(response => {
      setJourneys(response.data.journeys);
      setTotalPage(response.data.total_pages);
      setLoading(false);
    })
  }, [page, searchValue]);

  return (
    <>

      {loading && <Loading />}
      {!loading && <Searchbar placeholder="Search by station i.e Lastenlehto, or month i.e May" onChange={(val)=> setSearchValue(val)}/>}
      {!loading && journeys.map(journey => (
        <JourneyCard key={journey.id} journey={journey} />
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

