import { Button, Card, Description, ImageContainer, InfoContainer, Title } from "./styles";

export type Props = {
    title: string
    description: string
    image: string
}

const FoodCard = ({title, description, image}: Props) => {
    return (
        <Card>
            <ImageContainer>
                <img src={image} alt={title} />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    <h3>{title}</h3>
                </Title>
                <Description>
                    <p>{description}</p>
                </Description>
                <Button>Adicionar ao carrinho</Button>
            </InfoContainer>
        </Card>
    )
}

export default FoodCard;
