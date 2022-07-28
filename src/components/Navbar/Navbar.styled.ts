import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledNavBar = styled.nav`
    background-color: ${colors.primary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0.5rem 1rem;
    top: 0;
    left: 0;
    right: 0;
    height: 3rem;
    position: sticky;
    @media (max-width: 768px) {
        height: 4rem;
    }
`;
