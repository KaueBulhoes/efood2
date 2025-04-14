import { useNavigate } from "react-router-dom";
import { Button, Card, Description, ImageContainer, InfoContainer, RateContainer, Tag, TagContainer, Title } from "./styles";

export type Props = {
    id: number
    title: string
    description: string
    rate: number
    image: string
    type: string
    isFeatured: boolean
}

const RestaurantCard = ({ id, title, description, rate, image, type, isFeatured }: Props) => {
    const navigate = useNavigate();

    const goToRestaurant = () => {
        navigate(`/restaurant/${id}`)
    }

    return (
        <Card>
            <ImageContainer>
                <TagContainer>
                    {isFeatured && <Tag>Destaque da semana</Tag>}
                    <Tag>{type}</Tag>
                </TagContainer>
                <img src={image} alt="" />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    <h3>{title}</h3>
                    <RateContainer>
                        <span>{rate}</span>
                        <img src="Assets/images/estrela.png" alt="" />
                    </RateContainer>
                </Title>
                <Description>
                    <p>{description}</p>
                </Description>
                <Button onClick={goToRestaurant}>Saiba mais</Button>
            </InfoContainer>
        </Card>
    )
}

export default RestaurantCard