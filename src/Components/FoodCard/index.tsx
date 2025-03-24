import { Button, Card, Description, ImageContainer, InfoContainer, Title } from "./styles";

export type Props = {
    title: string
    description: string
    image: string
}

const FoodCard = ({title, description, image}: Props) => {
    const handleImageError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = "https://placehold.co/304x167";
    };

    return (
        <Card>
            <ImageContainer>
                <img src={image} alt={title} onError={handleImageError}/>
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
