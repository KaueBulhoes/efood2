import { useNavigate } from "react-router-dom";
import { BackgroundPattern, ContentWrapper, HeaderContainer, LogoImage } from "./styles";

interface HeaderProps {
  children?: React.ReactNode;
  height?: string;
}

export default function Header({ children, height }: HeaderProps) {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/`)
    }

    return (
      <HeaderContainer $height={height}>
        <BackgroundPattern />
        <LogoImage 
          src="/Assets/images/logo.png" 
          alt="efood logo" 
          role="button"
          onClick={goToHome} />
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </HeaderContainer>
    );
  }