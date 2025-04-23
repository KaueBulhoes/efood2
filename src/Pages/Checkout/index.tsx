import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootReducer } from '../../Store'
import formatPrice from '../../utils/formatPrice'
import { remove, close } from '../../Store/reducers/cart'
import { Button } from '../../Components/FoodCard/styles'
import SideBarCheckout from '../../Components/SideBarCheckout'
import { CartItem, CheckoutButton, FlexBox, FormContainer, InputGroup, QuantityContainer, Text } from './styles'

const Checkout = () => {
    const dispatch = useDispatch()

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const removeItem = (id: number) => dispatch(remove(id))
    
    const [step, setStep] = useState(0)
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
                ? 'Pagamento - Valor a pagar R$ 190,90'
                : 'Pedido realizado - {ORDER_ID}'
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
                <Button onClick={() => {if (items.length > 0 ) nextStep()}}>Continuar com a entrega</Button>
            </>
        )}

        {step === 1 && (
            <>
                <FormContainer>
                    <InputGroup>
                        <label htmlFor="buyerName">Quem irá receber</label>
                        <input type="text" id="buyerName"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="adress">Endereço</label>
                        <input type="text" id="adress"/>
                    </InputGroup>
                    <FlexBox>
                        <InputGroup>
                            <label htmlFor="city">Cidade</label>
                            <input type="text" id="city"/>
                        </InputGroup>
                        <InputGroup>
                            <label htmlFor="cep">CEP</label>
                            <input type="number" id="cep"/>
                        </InputGroup>
                    </FlexBox>
                    <InputGroup>
                        <label htmlFor="houseNumber">Número</label>
                        <input type="number" id="houseNumber"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="complement">Complemento (opcional)</label>
                        <input type="text" id="complement"/>
                    </InputGroup>
                </FormContainer>
                <CheckoutButton onClick={nextStep}>Continuar com o pagamento</CheckoutButton>
                <CheckoutButton onClick={backStep}>Voltar para o carrinho</CheckoutButton>
            </>
        )}

        {step === 2 && (
            <>
            <FormContainer>
                <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input type="text" id="cardName"/>
                </InputGroup>
                <FlexBox>
                    <InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input type="number" id="cardNumber"/>
                    </InputGroup>
                    <InputGroup maxWidth='87px'>
                        <label htmlFor="cvv">CVV</label>
                        <input type="number" id="cvv"/>
                    </InputGroup>
                </FlexBox>
                <FlexBox>
                    <InputGroup>
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input type="number" id="expiresMonth"/>
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="expiresMonth">Ano de vencimento</label>
                        <input type="number" id="expiresMonth"/>
                    </InputGroup>
                </FlexBox>
            </FormContainer>
            <CheckoutButton onClick={nextStep}>Finalizar pagamento</CheckoutButton>
            <CheckoutButton onClick={backStep}>Voltar para a edição de endereço</CheckoutButton>
            </>
        )}

        {step === 3 && (
            <>
            <Text>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br/><br/>
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br/><br/>
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br/><br/>
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </Text>
            <Button onClick={() => dispatch(close())}>Concluir</Button>
            </>
        )}
        </SideBarCheckout>
    )
}

export default Checkout
