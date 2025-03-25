import styled from "styled-components";

export const Card = styled.div`
    width: 472px;
    background-color: #fff;
    color: #E66767;
`

export const InfoContainer = styled.div`
    height: 100%;
    max-height: 200px;
    border: 1px #E66767 solid;
    border-top: none;
    padding: 8px;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 100%;
`

export const RateContainer = styled.div`
    display: flex;
    gap: 8px;
    width: 55px;
    height: 21px;
    align-items: center;

    span {
        font-weight: 700;
    }
`

export const Description = styled.div`
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    height: 110px;
`

export const Button = styled.button`
    width: 82px;
    height: 24px;
    color: #FFEBD9;
    background-color: #E66767;
    border: none;
    margin-top: 16px;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    position: relative;
    height: 217px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`

export const TagContainer = styled.div`
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 8px;
`

export const Tag = styled.button`
    padding: 6px;
    color: #FFEBD9;
    background-color: #E66767;
    border: none;
`