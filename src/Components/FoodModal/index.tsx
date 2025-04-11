import { FoodModalContainer } from "./styles";

type FoodModalProps = {
    isVisible: boolean;
    onClose: () => void;
}

const FoodModal = ({ isVisible, onClose }: FoodModalProps) => {
    if (!isVisible) return null;
    
    return (
        <>
            <FoodModalContainer>
                <p>Abriu</p>
                <button onClick={onClose}>Fechar</button>
            </FoodModalContainer>
        </>
    )
}

export default FoodModal