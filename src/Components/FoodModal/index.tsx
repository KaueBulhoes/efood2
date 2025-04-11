import { FoodModalContainer, ModalButton, ModalCloseButton, ModalDescription, ModalPortionText, ModalTextConainter } from "./styles";

type FoodModalProps = {
    isVisible: boolean;
    onClose: () => void;
}

const FoodModal = ({ isVisible, onClose }: FoodModalProps) => {
    if (!isVisible) return null;

    return (
        <>
            <FoodModalContainer>
                <img src="https://placehold.co/280x280" alt="" />
                <ModalTextConainter>
                    <h3>Pizza Marguerita</h3>
                    <ModalDescription>A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.</ModalDescription>
                    <ModalPortionText>Serve: de 2 a 3 pessoas</ModalPortionText>
                    <ModalButton onClick={onClose}>Adicionar ao carrinho - R$ 60,90</ModalButton>
                    <ModalCloseButton onClick={onClose}>
                    <img src="/Assets/images/close_button.png" alt="Fechar" />
                    </ModalCloseButton>
                </ModalTextConainter>
            </FoodModalContainer>
        </>
    )
}

export default FoodModal