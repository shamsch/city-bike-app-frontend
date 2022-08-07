import { IResponseJourney } from "../../types"
import { StyledJourneyCard } from "./JourneyCard.styled"
import { format } from "date-fns";

interface JourneyCardProps {
    journey: IResponseJourney
}

export const JourneyCard = ({ journey }: JourneyCardProps) => {
    return (
        <>
            <StyledJourneyCard data-testid="journey-card">
                <div className="journey">
                    <div className="left-journey" data-testid="departure-journey">
                        <h3>{journey.departure_station}</h3>
                        <h6> - {format(new Date(journey.departure_time), "dd LLL yyyy HH:mm")}</h6>

                    </div>

                    <div className="info" data-testid="info">
                        <p>Distance <b>{journey.covered_distance.toFixed(2)}</b> km </p>
                        <p>Duration <b>{journey.duration.toFixed(2)}</b> min</p>
                        <p>Month <b>{journey.month}</b></p>
                    </div>

                    <div className="right-journey" data-testid="return-journey">
                        <h3>{journey.return_station}</h3>
                        <h6> - {format(new Date(journey.return_time), "dd LLL yyyy HH:mm")}</h6>
                    </div>
                </div>

            </StyledJourneyCard>
        </>
    )
}

export default JourneyCard