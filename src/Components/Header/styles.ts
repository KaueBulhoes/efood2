import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FEEBE6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  position: relative;
`;

export const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: url('/pattern.png');
  opacity: 0.2;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 100px; /* Ajuste o tamanho conforme necessário */
  height: auto;
`;

export const Title = styled.h1`
  color: #E63946;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 16px;
`;
