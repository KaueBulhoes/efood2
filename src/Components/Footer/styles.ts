import styled from 'styled-components';
import { theme } from '../../styles';

export const FooterContainer = styled.header`
    background-color: #FFEBD9;
    align-items: center;
    padding: 40px 0;
    position: relative;
`

export const ContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoImage = styled.img`
    width: 125px;
    height: auto;
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 8px;
    margin-top: 32px;
`
export const LogoSocial = styled.img`
    width: 100%;
    height: auto;
`;

export const Description = styled.h1`
    width: 100%;
    max-width: 480px;
    color: #E66767;
    font-size: 10px;
    font-weight: 400;
    text-align: center;
    margin-top: 80px;

    ${theme.media.mobile} {
        padding: 0 16px;
        font-size: 9px;
    }
`;