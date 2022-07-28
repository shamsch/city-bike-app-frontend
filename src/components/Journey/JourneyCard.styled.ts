import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledJourneyCard = styled.div`
    background-color: ${colors.secondaryLight};
    width: 80%;
    height: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0.5rem 1rem;

    .journey {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .left-journey,
    .right-journey {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 33.33%;
    }
    .info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
        background-color: ${colors.secondary};
        animation: 0.5s ease-in-out 0s 1 fadeIn;
    }
`;
