import { useDispatch, useSelector } from "react-redux"
import { Button } from "../FoodCard/styles"
import { CartContainer, CartItem, Overlay, QuantityContainer, Sidebar } from "./styles"
import { RootReducer } from '../../Store'
import { close } from '../../Store/reducers/cart'

const Cart = () => {
    const { isOpen } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    <CartItem>
                        <img src="" alt="" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 49,99</span>
                            <button>
                                <img src="/Assets/images/lixeira.svg" alt="" />
                            </button>
                        </div>
                    </CartItem>
                    <CartItem>
                        <img src="" alt="" />
                        <div>
                            <h3>Pizza Marguerita</h3>
                            <span>R$ 49,99</span>
                            <button>
                                <img src="/Assets/images/lixeira.svg" alt="" />
                            </button>
                        </div>
                    </CartItem>
                </ul>
                <QuantityContainer>
                    <p>Valor Total</p>
                    <span>R$ 182,70</span>
                </QuantityContainer>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
        
}

export default Cart