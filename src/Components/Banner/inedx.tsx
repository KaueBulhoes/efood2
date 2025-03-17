import { BannerContainer, RestaurantImage, TextContainer, Info, Title } from "./styles";

type Props = {
    type: string
    title: string
    image: string
}

export default function Banner({type, title, image}: Props) {
    return(
        <BannerContainer>
            <RestaurantImage src={image} alt="efood logo" />
            <TextContainer>
                <Info>{type}</Info>
                <Title>{title}</Title>
            </TextContainer>
        </BannerContainer>
    )
}