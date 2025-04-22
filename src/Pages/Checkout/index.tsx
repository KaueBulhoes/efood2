import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../Store'
import formatPrice from '../../utils/formatPrice'
import { remove, close } from '../../Store/reducers/cart'
import { Button } from '../../Components/FoodCard/styles'
import SideBarCheckout from '../../Components/SideBarCheckout'
import { CartItem, QuantityContainer } from './styles'

const Checkout = () => {
    const [step, setStep] = useState(0)
    const dispatch = useDispatch()
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    const removeItem = (id: number) => dispatch(remove(id))

    const nextStep = () => setStep(step + 1)
    const backStep = () => setStep(step - 1)

    useEffect(() => {if (isOpen) {setStep(0)}}, [isOpen])

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.price)
        }, 0)
    }

    return (
        <SideBarCheckout
            title={
                step === 0
                ? ''
                : step === 1
                ? 'Entrega'
                : step === 2
                ? 'Pagamento'
                : 'Pedido realizado!'
            }
            onClose={() => dispatch(close())}
        >
        {step === 0 && (
            <>
                <ul>
                    {items.map((item) => (
                    <CartItem key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <div>
                        <h3>{item.name}</h3>
                        <span>{formatPrice(item.price)}</span>
                        <button onClick={() => removeItem(item.id)}>
                            <img src="/Assets/images/lixeira.svg" alt="Remover" />
                        </button>
                        </div>
                    </CartItem>
                    ))}
                </ul>
                <QuantityContainer>
                    <p>Valor Total</p>
                    <span>{formatPrice(getTotalPrice())}</span>
                </QuantityContainer>
                <Button onClick={nextStep}>Continuar com a entrega</Button>
            </>
        )}

        {step === 1 && (
            <>
            {/* Inputs do formulário de entrega aqui */}
            <Button onClick={nextStep}>Continuar com o pagamento</Button>
            <Button onClick={backStep}>Voltar para o carrinho</Button>
            </>
        )}

        {step === 2 && (
            <>
            {/* Inputs de pagamento aqui */}
            <Button onClick={nextStep}>Finalizar pagamento</Button>
            <Button onClick={backStep}>Voltar para o endereço</Button>
            </>
        )}

        {step === 3 && (
            <>
            <p>
                Pedido realizado! Em breve você receberá a confirmação no e-mail.
            </p>
            <Button onClick={() => dispatch(close())}>Concluir</Button>
            </>
        )}
        </SideBarCheckout>
    )
}

export default Checkout
