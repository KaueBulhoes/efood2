import styled from 'styled-components';
import { theme } from '../../styles';

interface HeaderContainerProps {
  $height?: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding-top: 24px;
  position: relative;
  height: ${({ $height }) => $height || "100%"};
`

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/Assets/images/fundo.png');
`;

export const ContentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 171px;
  padding-bottom: 40px;
  
  ${theme.media.tablet} {
    margin: 0 32px;
  }

  ${theme.media.mobile} {
    margin: 0 16px;
  }
`;

export const LogoImage = styled.img`
  width: 125px;
  position: absolute;
  right: calc(50% - 50px);
  top: 40px;
  z-index: 1;
  cursor: pointer;

    ${theme.media.mobile} {
    width: 90px;
    top: 24px;
    right: calc(50% - 45px);
  }
`;

export const Title = styled.h1`
  color: #E66767;
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin-top: 196px;

  ${theme.media.tablet} {
    font-size: 28px;
    margin-top: 120px;
  }

  ${theme.media.mobile} {
    font-size: 22px;
    margin-top: 100px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1024px;
  top: 43px;
`

export const Text = styled.p`
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
`;

export const TextCart = styled(Text)`
  cursor: pointer;
`;