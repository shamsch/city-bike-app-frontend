import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledStationCard = styled.div`
    background-color: ${colors.secondary};
    //size of the card
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    margin: 0.5rem 0.25rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
    // on hover
    &:hover {
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
        background-color: ${colors.secondaryLight};
        cursor: pointer;
        h6{
            color: ${colors.blackDark};
        }
    }
    // heading of the card
    h3 {
        font-size: 2rem;
        font-weight: bold;
        color: ${colors.black};
        margin: 0;
        padding: 0;
    }
    // subtitle of the card
    h6 {
        font-size: 1.25rem;
        font-decoration: italic; 
        color: ${colors.grayDark};
        margin: 0;
        padding: 0;
    }
    // content of the card
    p {
        font-size: 1rem;
        color: ${colors.white};
        margin: 0;
        padding: 0;

    }
`;
