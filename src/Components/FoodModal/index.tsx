import { FoodModalContainer, ModalAddButton, ModalCloseButton, ModalDescription, ModalPortionText, ModalTextConainter, Overlay } from "./styles";
import { open, add } from '../../Store/reducers/cart'
import { useDispatch } from "react-redux";
import { ItemCardapio } from "../../Models/Restaurants";
import formatPrice from "../../utils/formatPrice";

type FoodModalProps = {
    isVisible: boolean;
    onClose: () => void;
    item: ItemCardapio;
}

const FoodModal = ({ isVisible, onClose, item }: FoodModalProps) => {
        const dispatch = useDispatch()
        
        const addToCart = () => {
            dispatch(add(item))
            dispatch(open())
        }

    if (!isVisible) return null;

    return (
        <>
            <Overlay onClick={onClose}/>
            <FoodModalContainer>
                <img src={item.image} alt="" />
                <ModalTextConainter>
                    <h3>{item.name}</h3>
                    <ModalDescription>{item.description}</ModalDescription>
                    <ModalPortionText>Serve: {item.portion}</ModalPortionText>
                    <ModalAddButton onClick={addToCart}>Adicionar ao carrinho - {formatPrice(item.price)}</ModalAddButton>
                    <ModalCloseButton onClick={onClose}>
                    <img src="/Assets/images/close_button.png" alt="Fechar" />
                    </ModalCloseButton>
                </ModalTextConainter>
            </FoodModalContainer>
        </>
    )
}

export default FoodModal