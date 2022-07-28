import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledPagination = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .pagination {
        li {
            list-style: none;
        }
    }
    .page-item {
        display: inline-block;
        margin-right: 0.5rem;
        margin-left: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        background-color: ${colors.secondary};
        color: ${colors.white};
        font-size: 1rem;
        font-weight: bold;
        &:hover {
            background-color: ${colors.blackLight};
            cursor: pointer;
        }
    }

    .active {
        background-color: ${colors.secondaryLight};
    }
`;
