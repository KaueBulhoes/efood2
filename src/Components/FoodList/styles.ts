import styled from "styled-components";
import { theme } from "../../styles";

export const FoodListContainer = styled.div`
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 32px;
    margin: 56px auto 120px;
    grid-auto-rows: 1fr;

    ${theme.media.tablet} {
        gap: 24px;
        padding: 0 16px;
        margin-bottom: 80px;
        grid-template-columns: 1fr;
        padding: 0 12px;    
    }

    ${theme.media.mobile} {
        grid-template-columns: 1fr;
        gap: 16px;
        padding: 0 12px;
    }
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
`
