import { BackgroundPattern, ContentWrapper, HeaderContainer, LogoImage, Title } from "./styles";

export default function Header() {
    return (
      <HeaderContainer>
        <BackgroundPattern />
        <ContentWrapper>
          <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
          <Title>
            Viva experiências gastronômicas <br /> no conforto da sua casa
          </Title>
        </ContentWrapper>
      </HeaderContainer>
    );
  }