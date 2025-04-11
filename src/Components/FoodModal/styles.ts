import styled from 'styled-components';

export const FoodModalContainer = styled.div`
    display: flex;
    background-color: #E66767;
    padding: 32px;
    gap: 24px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    > img {
        height: 280px;
        width: 280px;
        object-fit: cover;
    }
`

export const ModalTextConainter = styled.div`
    display: flex;
    flex-direction: column;
    color: #FFF;

    > h3 {
        font-weight: 900;
        font-size: 18px;
        line-height: 100%;
        margin-bottom: 16px;
    }
`

export const ModalDescription = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
`

export const ModalPortionText = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
`

export const ModalAddButton = styled.button`
    width: 218px;
    height: 24px;
    color: #E66767;
    background-color: #FFEBD9;
    font-family: Roboto;
    font-weight: 700;
    font-size: 14px;
    line-height: 100%;
    text-align: center;
    border: none;
    cursor: pointer;
    margin-top: auto;
`

export const ModalCloseButton = styled.button`
    color: #FFF;
    position: absolute;
    right: 8px;
    top: 8px;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
    }
`
export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
`;
