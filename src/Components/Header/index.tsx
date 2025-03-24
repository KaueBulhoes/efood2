import { BackgroundPattern, ContentWrapper, HeaderContainer, LogoImage } from "./styles";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
    return (
      <HeaderContainer>
        <BackgroundPattern />
        <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </HeaderContainer>
    );
  }