import styled from 'styled-components'

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
        }
        border: none;
        background-color: transparent;
        position: absolute;
        bottom: 8px;
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