import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { InputMask  } from '@react-input/mask'


import { RootReducer } from '../../Store'
import { remove, close } from '../../Store/reducers/cart'
import formatPrice from '../../utils/formatPrice'
import { usePurchaseMutation } from '../../Api/restaurantService'

import { Button } from '../../Components/FoodCard/styles'
import SideBarCheckout from '../../Components/SideBarCheckout'
import { CartItem, CheckoutButton, FlexBox, FormContainer, InputGroup, QuantityContainer, Text, TextEmptyCart } from './styles'

type FormValues = {
    buyerName: string
    address: string
    city: string
    cep: string
    houseNumber: string
    complement: string
    cardName: string
    cardNumber: string
    cvv: string
    expiresMonth: string
    expiresYear: string
}

const Checkout = () => {
    const dispatch = useDispatch()
    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    
    const removeItem = (id: number) => dispatch(remove(id))
    
    const [step, setStep] = useState(0)
    const [orderId, setOrderId] = useState<string | null>(null)

    const nextStep = async () => {
        if (step === 0) {
            setStep(1)
            return
        }
    
        const currentSchema = stepSchemas[step - 1]
    
        try {
            await currentSchema.validate(form.values, { abortEarly: false })
            setStep(step + 1)
        } catch (err) {
        if (err instanceof Yup.ValidationError) {
            const errors = err.inner.reduce((acc, curr) => {
            if (curr.path) acc[curr.path] = curr.message
            return acc
            }, {} as Record<string, string>)
            form.setErrors(errors)
            form.setTouched(
                Object.keys(errors).reduce((acc, key) => {
                    acc[key] = true
                    return acc
                }, {} as Record<string, boolean>)
            )
        }
        }
    }      

    const backStep = () => setStep(step - 1)

    useEffect(() => {if (isOpen) {setStep(0)}}, [isOpen])

    const [purchase, { isSuccess }] =
        usePurchaseMutation()

    const stepSchemas = [
        // Step 1 - Delivery
        Yup.object({
            buyerName: Yup.string()
            .min(5, 'O nome precisa ter pelo menos 5 caracteres')
            .required('O campo é obrigatório'),
            address: Yup.string()
            .min(10, 'O endereço precisa ter pelo menos 10 caracteres')
            .required('O campo é obrigatório'),
            city: Yup.string().required('O campo é obrigatório'),
            cep: Yup.string()
            .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
            .required('O campo é obrigatório'),
            houseNumber: Yup.string().required('O campo é obrigatório'),
            complement: Yup.string()
        }),
        
        // Step 2 - Payment
        Yup.object({
            cardName: Yup.string().required('O campo é obrigatório'),
            cardNumber: Yup.string()
            .matches(/^\d{4} \d{4} \d{4} \d{4}$/, 'Número do cartão inválido')
            .required('O campo é obrigatório'),
            cvv: Yup.string()
            .min(3, 'CVV deve ter 3 dígitos')
            .max(3, 'CVV deve ter 3 dígitos')
            .required('O campo é obrigatório'),
            expiresMonth: Yup.string()
            .min(2, 'Mês deve ter 2 dígitos')
            .max(2, 'Mês deve ter 2 dígitos')
            .required('O campo é obrigatório'),
            expiresYear: Yup.string()
            .min(2, 'Ano deve ter 2 dígitos')
            .max(2, 'Ano deve ter 2 dígitos')
            .required('O campo é obrigatório')
        })
    ]

    const form = useFormik({
        initialValues: {
            buyerName: '',
            address: '',
            city: '',
            cep: '',
            houseNumber: '',
            complement: '',
            cardName: '',
            cardNumber: '',
            cvv: '',
            expiresMonth: '',
            expiresYear: ''
        },
        validationSchema: stepSchemas[step - 1],
        onSubmit: (values) => handlePurchase(values)
    })

    const handlePurchase = async (values: FormValues) => {
        if (items.length === 0) return
    
        try {
            const response = await purchase({
                products: items.map((item) => ({ id: item.id, price: item.price })),
                delivery: {
                    receiver: values.buyerName,
                address: {
                    description: values.address,
                    city: values.city,
                    zipCode: values.cep,
                    number: Number(values.houseNumber),
                    complement: values.complement
                }
            },
            payment: {
                card: {
                    name: values.cardName,
                    number: values.cardNumber,
                    code: Number(values.cvv),
                    expires: {
                        month: Number(values.expiresMonth),
                        year: Number(values.expiresYear)
                    }
                }
            }
        }).unwrap()

            setOrderId(response.orderId)
        } catch (err) {
            console.error('Erro ao realizar a compra:', err)
        }
    }

    const getErrorMessage = (fieldName: string) => {
        return fieldName in form.touched && fieldName in form.errors
    }      

    const getTotalPrice = () => {
        return items.reduce((acumulador, valorAtual) => {
            return (acumulador += valorAtual.price)
        }, 0)
    }

    return (
        <SideBarCheckout
            title={
                isSuccess
                ? `Pedido realizado - ${orderId}`
                : step === 0
                ? ''
                : step === 1
                ? 'Entrega'
                : `Pagamento - Valor a pagar ${formatPrice(getTotalPrice())}`
            }
            onClose={() => dispatch(close())}
        >
            {isSuccess ? (
                <>
                    <Text>
                        Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br/><br/>
                        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. <br/><br/>
                        Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br/><br/>
                        Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
                    </Text>
                    <Button onClick={() => dispatch(close())}>Concluir</Button>
                </>
            ) : (
                <>
                {step === 0 && (
                    <>
                        {items.length === 0 ? (
                            <TextEmptyCart>
                                O carrinho está vazio, adicione pelo menos um produto para continuar
                                com a compra
                            </TextEmptyCart>
                        ) : (
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
                                </QuantityContainer><Button
                                    onClick={nextStep}
                                    disabled={items.length === 0}
                                >
                                    Continuar com a entrega
                                </Button></>
                        )}
                    </>
                )}

                {step === 1 && (
                            <>
                                <FormContainer onSubmit={form.handleSubmit}>
                                    <InputGroup>
                                        <label htmlFor="buyerName">Quem irá receber</label>
                                        <input 
                                            type="text" 
                                            id="buyerName"
                                            name="buyerName"
                                            value={form.values.buyerName}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('buyerName') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="address">Endereço</label>
                                        <input 
                                            type="text" 
                                            id="address"
                                            name="address"
                                            value={form.values.address}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('address') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                    <FlexBox>
                                        <InputGroup>
                                            <label htmlFor="city">Cidade</label>
                                            <input 
                                                type="text" 
                                                id="city"
                                                name="city"
                                                value={form.values.city}
                                                onChange={form.handleChange}
                                                onBlur={form.handleBlur}
                                                className={getErrorMessage('city') ? 'error' : ''}
                                            />
                                        </InputGroup>
                                        <InputGroup>
                                            <label htmlFor="cep">CEP</label>
                                            <InputMask
                                                mask="XXXXX-XXX"
                                                replacement={{ 'X': /\d/ }}
                                                id="cep"
                                                type="text"
                                                name="cep"
                                                value={form.values.cep}
                                                onChange={form.handleChange}
                                                onBlur={form.handleBlur}
                                                className={getErrorMessage('cep') ? 'error' : ''}
                                            />
                                        </InputGroup>
                                    </FlexBox>
                                    <InputGroup>
                                        <label htmlFor="houseNumber">Número</label>
                                        <input 
                                            type="string" 
                                            id="houseNumber"
                                            name="houseNumber"
                                            value={form.values.houseNumber}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('houseNumber') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="complement">Complemento (opcional)</label>
                                        <input 
                                            type="text" 
                                            id="complement"
                                            name="complement"
                                            value={form.values.complement}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                        />
                                    </InputGroup>
                                    <CheckoutButton type="button" onClick={nextStep}>
                                        Continuar com o pagamento
                                    </CheckoutButton>
                                    <CheckoutButton type="button" onClick={backStep}>
                                        Voltar para o carrinho
                                    </CheckoutButton>
                                </FormContainer>
                            </>
                        )}

                {step === 2 && (
                            <>
                            <FormContainer onSubmit={form.handleSubmit}>
                                <InputGroup>
                                    <label htmlFor="cardName">Nome no cartão</label>
                                    <input 
                                        type="text" 
                                        id="cardName"
                                        name="cardName"
                                        value={form.values.cardName}
                                        onChange={form.handleChange}
                                        onBlur={form.handleBlur}
                                        className={getErrorMessage('cardName') ? 'error' : ''}
                                    />
                                </InputGroup>
                                <FlexBox>
                                    <InputGroup>
                                        <label htmlFor="cardNumber">Número do cartão</label>
                                        <InputMask
                                            mask="XXXX XXXX XXXX XXXX"
                                            replacement={{ 'X': /\d/ }}
                                            id="cardNumber"
                                            type="text"
                                            name="cardNumber"
                                            value={form.values.cardNumber}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('cardNumber') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                    <InputGroup $maxWidth='87px'>
                                        <label htmlFor="cvv">CVV</label>
                                        <InputMask
                                            mask="XXX"
                                            replacement={{ 'X': /\d/ }}
                                            id="cvv"
                                            type="text"
                                            name="cvv"
                                            value={form.values.cvv}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('cvv') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                </FlexBox>
                                <FlexBox>
                                    <InputGroup>
                                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                                        <InputMask
                                            mask="XX"
                                            replacement={{ 'X': /\d/ }}
                                            id="expiresMonth"
                                            type="text"
                                            name="expiresMonth"
                                            value={form.values.expiresMonth}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('expiresMonth') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                    <InputGroup>
                                        <label htmlFor="expiresYear">Ano de vencimento</label>
                                        <InputMask
                                            mask="XX"
                                            replacement={{ 'X': /\d/ }}
                                            id="expiresYear"
                                            type="text"
                                            name="expiresYear"
                                            value={form.values.expiresYear}
                                            onChange={form.handleChange}
                                            onBlur={form.handleBlur}
                                            className={getErrorMessage('expiresYear') ? 'error' : ''}
                                        />
                                    </InputGroup>
                                </FlexBox>
                                <CheckoutButton type="submit">Finalizar pagamento</CheckoutButton>
                                <CheckoutButton type="button" onClick={backStep}>Voltar para a edição de endereço</CheckoutButton>
                            </FormContainer>
                            </>
                        )}
                </>
            )}
        </SideBarCheckout>
    )
}

export default Checkout