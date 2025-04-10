import styled from "styled-components";

export const FoodListContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 40px;
    margin: 80px 0;

    :nth-child(3n + 2) {
        margin: 0 auto;
    }
    
    :nth-child(3n) {
        justify-self: end;
    }
`
export const ListContainer = styled.div`
    margin: 0 109px;
`