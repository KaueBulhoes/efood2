import { ContentWrapper, Description, FooterContainer, LogoImage, LogoSocial, SocialContainer } from "./styles";

export default function Footer() {
    return (
        <FooterContainer>
            <ContentWrapper>
                <LogoImage src="/Assets/images/logo.png" alt="efood logo" />
                <SocialContainer>
                    <LogoSocial src="/Assets/images/instagram-round-svgrepo-com.svg" alt="instagram logo" />
                    <LogoSocial src="/Assets/images/facebook-round-svgrepo-com.svg" alt="facebook logo" />
                    <LogoSocial src="/Assets/images/twitter-2-svgrepo-com 1.svg" alt="twitter logo" />
                </SocialContainer>
                <Description>
                A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. 
                </Description>
            </ContentWrapper>
        </FooterContainer>
    )
}