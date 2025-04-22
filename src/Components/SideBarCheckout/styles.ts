import styled from 'styled-components'

export const CheckoutContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: none;
    justify-content: flex-end;
    z-index: 1;

    &.is-open {
        display: flex;
    }
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
