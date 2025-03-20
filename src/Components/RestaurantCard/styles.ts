import styled from "styled-components";

export const Card = styled.div`
    width: 472px;
    background-color: #fff;
    color: #E66767;
`

export const InfoContainer = styled.div`
    margin: 10px;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 100%;
`

export const Description = styled.div`
    margin-top: 12px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`

export const Button = styled.button`
    width: 82px;
    height: 24px;
    color: #FFEBD9;
    background-color: #E66767;
    border: none;
    margin: 12px 0 12px 0;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    position: relative;
`

export const TagContainer = styled.div`
    position: absolute;
    right: 12px;
    display: flex;
    gap: 8px;
`

export const Tag = styled.button`
    padding: 4px;
    color: #FFEBD9;
    background-color: #E66767;
    border: none;
    margin: 12px 0 12px 0;
`