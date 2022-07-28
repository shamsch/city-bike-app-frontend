import { IResponseJourney } from "../../types"
import { StyledJourneyCard } from "./JourneyCard.styled"
import { format } from "date-fns";

interface JourneyCardProps {
    journey: IResponseJourney
}

function JourneyCard({ journey }: JourneyCardProps) {
    return (
        <>
            <StyledJourneyCard>
                <div className="journey">
                    <div className="left-journey">
                        <h3>{journey.departure_station}</h3>
                        <h6> - {format(new Date(journey.departure_time), "dd.MM.yyyy HH:mm")}</h6>

                    </div>

                    <div className="info">
                        <p>Distance <b>{journey.covered_distance.toFixed(2)}</b> km </p>
                        <p>Duration <b>{journey.duration.toFixed(2)}</b> min</p>
                        <p>Month <b>{journey.month}</b></p>
                    </div>
                    
                    <div className="right-journey">
                        <h3>{journey.return_station}</h3>
                        <h6> - {format(new Date(journey.return_time), "dd.MM.yyyy HH:mm")}</h6>
                    </div>
                </div>




            </StyledJourneyCard>
        </>
    )
}

export default JourneyCard