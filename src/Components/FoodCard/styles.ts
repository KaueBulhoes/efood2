import styled from "styled-components";

export const Card = styled.div`
    width: 320px;
    background-color: #E66767;
    color: #fff;
    padding-bottom: 12px;
    height: 355px;
`;

export const ImageContainer = styled.div`
    width: 100%;

    img {
        width: 100%;
        height: 180px;
        object-fit: cover;
    }
`;

export const InfoContainer = styled.div`
    padding: 8px;
`;

export const Title = styled.div`
    display: block;

    h3 {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
    }
`;

export const Description = styled.div`
    font-size: 14px;
    line-height: 18px;
`;

export const Button = styled.button`
    width: 100%;
    height: 32px;
    color: #E66767;
    background-color: #FFEBD9;
    border: none;
    margin-top: 12px;
    cursor: pointer;
    font-weight: bold;
`;