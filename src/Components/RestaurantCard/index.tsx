import { useNavigate } from "react-router-dom";
import { Button, Card, Description, ImageContainer, InfoContainer, Tag, TagContainer, Title } from "./styles";

export type Props = {
    title: string
    description: string
    rate: number
    image: string
    type: string
    isFeatured: boolean
}

const RestaurantCard = ({ title, description, rate, image, type, isFeatured }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/restaurant')
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
                    <span>{rate}</span>
                </Title>
                <Description>
                    <p>{description}</p>
                </Description>
                <Button onClick={handleClick}>Saiba mais</Button>
            </InfoContainer>
        </Card>
    )
}

export default RestaurantCard