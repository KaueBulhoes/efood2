import { BackgroundPattern, ContentWrapper, HeaderContainer } from "./styles";

interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({children}: HeaderProps) {
    return (
      <HeaderContainer>
        <BackgroundPattern />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </HeaderContainer>
    );
  }