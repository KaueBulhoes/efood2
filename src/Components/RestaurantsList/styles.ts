import styled from "styled-components";
import { theme } from "../../styles";

export const RestList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
    row-gap: 40px;
    margin: 80px 0;

    ${theme.media.tablet} {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 24px;
        margin: 40px 0;
    }
`
export const ListContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
`