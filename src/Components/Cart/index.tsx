import { useDispatch, useSelector } from "react-redux"
import { Button } from "../FoodCard/styles"
import { CartContainer, CartItem, Overlay, QuantityContainer, Sidebar } from "./styles"
import { RootReducer } from '../../Store'
import { close, remove } from '../../Store/reducers/cart'
import formatPrice from "../../utils/formatPrice"

const Cart = () => {
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.price)
        }, 0)
    }

    return (
        <CartContainer className={isOpen ? 'is-open' : ''}>
            <Overlay onClick={closeCart} />
            <Sidebar>
                <ul>
                    {items.map((item) => (
                        <CartItem>
                            <img src={item.image} alt="" />
                            <div>
                                <h3>{item.name}</h3>
                                <span>{formatPrice(item.price)}</span>
                                <button onClick={() => removeItem(item.id)}>
                                    <img src="/Assets/images/lixeira.svg" alt="" />
                                </button>
                            </div>
                        </CartItem>
                    ))}
                </ul>
                <QuantityContainer>
                    <p>Valor Total</p>
                    <span>{formatPrice(getTotalPrice())}</span>
                </QuantityContainer>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
        
}

export default Cart