import { useDispatch, useSelector } from 'react-redux'
import { Overlay, Sidebar, CheckoutContainer } from './styles'
import { close } from '../../Store/reducers/cart'
import { RootReducer } from '../../Store'

type Props = {
    title: string
    children: React.ReactNode
    onClose?: () => void
}

const SideBarCheckout = ({ title, children, onClose }: Props) => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <CheckoutContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <h2>{title}</h2>
                {children}
            </Sidebar>
        </CheckoutContainer>
    )
}

export default SideBarCheckout
