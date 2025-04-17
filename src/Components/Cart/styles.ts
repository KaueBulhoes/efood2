import styled from 'styled-components'

export const CartContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // display: none;
    justify-content: flex-end;
    z-index: 1;
    display: flex;
    // &.is-open {
    //     display: flex;
    // }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.7;
`

export const Sidebar = styled.aside`
    background-color: #E66767;
    z-index: 1;
    padding: 32px 8px 0 8px;
    max-width: 360px;
    width: 100%;
`

export const CartItem = styled.li`
    display: flex;
    padding: 8px 0 12px 8px;
    position: relative;
    background-color: #FFEBD9;
    margin-bottom: 16px;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 8px;
    }

    h3 {
        color: #E66767;
        font-weight: 900;
        font-size: 18px;
        margin-bottom: 16px;
    }

    span {
        color: #E66767;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
    }

    button {
        > img {
            width: 16px;
            height: 16px;
            margin: 0;
        }
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 0;
        cursor: pointer;
    }
`

export const QuantityContainer = styled.p`
    display: flex;
    font-weight: 700;
    font-size: 14px;
    color: #FFEBD9;
    margin-top: 40px;
    margin-bottom: 16px;
    justify-content: space-between
`