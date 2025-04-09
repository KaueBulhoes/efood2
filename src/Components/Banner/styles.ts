import styled from "styled-components";

export const BannerContainer = styled.div`
position: relative;
`

export const RestaurantImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(50%);
`

export const TextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    margin: 25px auto;
    color: #fff;
    font-size: 32px;
    max-width: 1024px;
`

export const Info = styled.p`
    font-weight: 100;
`

export const Title = styled.h2`
    font-weight: 900;
`