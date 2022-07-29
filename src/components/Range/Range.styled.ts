import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledRange = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    p{
        font-size: 1.2rem;
        font-weight: bold;
    }
    .range{
        width: 80%;
    }
    button {
        background-color: ${colors.blackLight};
        outline: none;
        cursor: pointer;
        //btn text
        p{
            color: ${colors.white};
            font-size: 1.2rem;
            font-weight: bold;
        }
        &:hover {
            background: ${colors.grayDark};
        }
    }

    
`
