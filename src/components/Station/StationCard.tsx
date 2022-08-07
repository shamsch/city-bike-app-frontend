import { useNavigate } from "react-router-dom"
import { IStation } from "../../types"
import { StyledStationCard } from "./StationCard.styled"

interface StationProps {
  station: IStation
}

const StationCard = ({ station }: StationProps) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/stations/${station.id}`)
  }

  return (
    <>
      <StyledStationCard
        onClick={handleClick}
        data-testid="station-card"
      >
        <h3>{station.name}</h3>
        <h6 data-testid="address"> - {station.address}</h6>
        <p data-testid="capacity"> Capacity {station.capacity}</p>
      </StyledStationCard>

    </>
  )
}

export default StationCard