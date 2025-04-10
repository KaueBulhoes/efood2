import styled from "styled-components";

export const FoodListContainer = styled.div`
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    gap: 32px;
    margin: 56px auto 120px;
`