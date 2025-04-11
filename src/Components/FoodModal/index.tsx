import { FoodModalContainer, ModalAddButton, ModalCloseButton, ModalDescription, ModalPortionText, ModalTextConainter } from "./styles";

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
    if (!isVisible) return null;

    return (
        <>
            <FoodModalContainer>
                <img src={image} alt="" />
                <ModalTextConainter>
                    <h3>{title}</h3>
                    <ModalDescription>{description}</ModalDescription>
                    <ModalPortionText>Serve: {portion}</ModalPortionText>
                    <ModalAddButton>Adicionar ao carrinho - {price}</ModalAddButton>
                    <ModalCloseButton onClick={onClose}>
                    <img src="/Assets/images/close_button.png" alt="Fechar" />
                    </ModalCloseButton>
                </ModalTextConainter>
            </FoodModalContainer>
        </>
    )
}

export default FoodModal