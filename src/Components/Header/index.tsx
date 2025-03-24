import { BackgroundPattern, ContentWrapper, HeaderContainer, LogoImage } from "./styles";

interface HeaderProps {
  children?: React.ReactNode;
  height?: string;
}

export default function Header({ children, height }: HeaderProps) {
    return (
      <HeaderContainer $height={height}>
        <BackgroundPattern />
        <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </HeaderContainer>
    );
  }