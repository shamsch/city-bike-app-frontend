import styled from "styled-components";
import { colors } from "../../utils/color";

export const StyledStationDetail = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${colors.gray};
    padding: 10px;
    overflow-y: auto;
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 10px;

    .station-name {
        font-size: 2rem;
        font-weight: bold;
        color: ${colors.black};
        margin-bottom: 10px;
    }

    .address {
        font-size: 1.2rem;
        font-weight: bold;
        color: ${colors.blackLight};
    }
    .static-map {
        width: 50%;
        height: 50%;
        margin: 0 auto;
        // on hover
        &:hover {
            cursor: pointer;
            box-shadow: 0 0 10px ${colors.black};
            animation: 0.5s ease-in-out 0s 1 fadeIn;
        }
    }
    .station-content {
        margin-right: 10px;
        p {
            font-size: 1.2rem;
            color: ${colors.blackDark};
        }
    }
    .station-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .top-stations {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 10px 0;
    }

    .top-station-list {
        margin-right: 40px;

        p {
            font-size: 1.5rem;
            text-decoration: underline;
            color: ${colors.primary};
        }
        ul {
            list-style: none;
            padding: 1px 10px;
            margin: 0;
            li {
                font-size: 1.2rem;
                color: ${colors.blackDark};
                margin: 0;
                padding: 1px 0;
            }
        }
    }
`;
