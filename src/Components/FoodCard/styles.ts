import styled from "styled-components";

export const Card = styled.div`
    width: 320px;
    background-color: #E66767;
    color: #fff;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 8px;

    img {
        height: 167px;
        width: 304px;
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
    height: 88px;
`;

export const Button = styled.button`
    width: 100%;
    height: 24px;
    color: #E66767;
    background-color: #FFEBD9;
    border: none;
    margin-top: 8px;
    cursor: pointer;
    font-weight: bold;
`;