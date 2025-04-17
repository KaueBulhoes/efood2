import { CartContainer, CartItem, Overlay, QuantityContainer, Sidebar } from "./styles"

const Cart = () => {
    return (
        <CartContainer>
            <Overlay />
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
            </Sidebar>
        </CartContainer>
    )
        
}

export default Cart