import { FoodModalContainer, ModalAddButton, ModalCloseButton, ModalDescription, ModalPortionText, ModalTextConainter, Overlay } from "./styles";
import { open } from '../../Store/reducers/cart'
import { useDispatch } from "react-redux";

type FoodModalProps = {
    isVisible: boolean;
    onClose: () => void;
    title: string;
    description: string;
    portion: string;
    price: string;
    image: string;
}

const FoodModal = ({ isVisible, onClose, title, description, portion, price, image }: FoodModalProps) => {
        const dispatch = useDispatch()
    
        const openCart = () => {
            dispatch(open())
        }

    if (!isVisible) return null;

    return (
        <>
            <Overlay onClick={onClose}/>
            <FoodModalContainer>
                <img src={image} alt="" />
                <ModalTextConainter>
                    <h3>{title}</h3>
                    <ModalDescription>{description}</ModalDescription>
                    <ModalPortionText>Serve: {portion}</ModalPortionText>
                    <ModalAddButton onClick={openCart}>Adicionar ao carrinho - {price}</ModalAddButton>
                    <ModalCloseButton onClick={onClose}>
                    <img src="/Assets/images/close_button.png" alt="Fechar" />
                    </ModalCloseButton>
                </ModalTextConainter>
            </FoodModalContainer>
        </>
    )
}

export default FoodModal