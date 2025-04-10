import styled from "styled-components";

export const Card = styled.div`
    height: 100%;
    width: 100%;
    max-width: 320px;
    background-color: #E66767;
    color: #FFEBD9;
    display: flex;
    flex-direction: column;
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
    display: flex;
    flex-direction: column;
    height: 100%;
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
    line-height: 22px;
    height: 100%;
`;

export const Button = styled.button`
    width: 100%;
    height: 24px;
    color: #E66767;
    background-color: #FFEBD9;
    border: none;
    margin-top: auto;
    cursor: pointer;
    font-weight: bold;
`;