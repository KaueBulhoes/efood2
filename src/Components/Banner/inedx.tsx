import { BannerContainer, RestaurantImage, TextContainer, Info, Title } from "./styles";

export default function Banner() {
    return(
        <BannerContainer>
            <RestaurantImage src="/Assets/images/la_dolce_vita.png" alt="efood logo" />
            <TextContainer>
                <Info>Italiana</Info>
                <Title>La dolce trattoria</Title>
            </TextContainer>
        </BannerContainer>
    )
}