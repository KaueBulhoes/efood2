import { Button, Card, Description, ImageContainer, InfoContainer, Tag, TagContainer, Title } from "./styles";

export default function RestaurantCard() {
    return(
        <Card>
            <ImageContainer>
                <TagContainer>
                    <Tag>Destaque da semana</Tag>
                    <Tag>Japonesa</Tag>
                </TagContainer>
                <img src="/Assets/images/hioki_sushi.png" alt="Sushi"/>
            </ImageContainer>
            <InfoContainer>
                <Title>
                    <h3>Hioki Sushi</h3>
                    <span>4.9</span>
                </Title>
                <Description>
                    <p>Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!</p>
                </Description>
                <Button>Saiba mais</Button>
            </InfoContainer>
        </Card>
    )
}