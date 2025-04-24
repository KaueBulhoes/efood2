import styled from 'styled-components'
import { Button } from '../../Components/FoodCard/styles'

type InputGroupProps = {
    maxWidth?: string
}

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

export const FormContainer = styled.form`
    margin-bottom: 24px;
`

export const InputGroup = styled.div<InputGroupProps>`
    margin-bottom: 8px;
    max-width: ${(props) => props.maxWidth || 'auto'};
    flex-grow: 1;

    label {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
        display: block;
        color: #FFEBD9;
    }

    input,
    select {
        background-color: #FFEBD9;
        border: none;
        height: 32px;
        padding: 0 8px;
        width: 100%;

        &.error {
            border: 1px solid red;
        }
    }
`

export const FlexBox = styled.div`
    display: flex;
    gap: 34px;
`

export const CheckoutButton = styled(Button)`
    margin-bottom: 8px;
`

export const Text = styled(QuantityContainer)`
    font-weight: 400;
    margin-top: 16px;
    margin-bottom: 24px;
    font-family: Roboto;
    line-height: 22px;
`