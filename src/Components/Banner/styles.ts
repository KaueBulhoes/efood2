import styled from "styled-components";

export const RestaurantImage = styled.img`
    width: 100%;
    height: 280px;
    object-fit: cover;
    filter: brightness(50%);
`

export const BannerContainer = styled.div`
    position: relative;
`

export const TextContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 80%;
    margin: 25px 171px;
    color: #fff;
    font-size: 32px;
`

export const Info = styled.p`
    font-weight: 100;
`

export const Title = styled.h2`
    font-weight: 900;
`