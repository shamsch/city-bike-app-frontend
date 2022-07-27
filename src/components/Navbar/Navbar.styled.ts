import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledNavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 20px;
    background-color: ${colors.primary};
    color: ${colors.tertiary};
    height: 60px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100px;
        padding: 0;
    }
`;


