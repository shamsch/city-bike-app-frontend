import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledSearchbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 1rem; 
    margin-bottom: 1rem;
    width: 100%;
    input {
        background-color: ${colors.secondaryLight};
        width: 50%;
        height: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        padding: 0.5rem 1rem;
    }
    button {
        background-color: ${colors.secondary};
        border-radius: 0.5rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
    }

`;
