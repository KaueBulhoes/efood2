import { Button, Card, Description, ImageContainer, InfoContainer, Tag, TagContainer, Title } from "./styles";

export type Props = {
    title: string
    description: string
    rate: number
    image: string
}

const RestaurantCard = ({ title, description, rate, image }: Props) => (
    <Card>
    <ImageContainer>
        <TagContainer>
            <Tag>Destaque da semana</Tag>
            <Tag>Japonesa</Tag>
        </TagContainer>
        <img src={image} alt=""/>
    </ImageContainer>
    <InfoContainer>
        <Title>
            <h3>{title}</h3>
            <span>{rate}</span>
        </Title>
        <Description>
            <p>{description}</p>
        </Description>
        <Button>Saiba mais</Button>
    </InfoContainer>
</Card>
)

export default RestaurantCard