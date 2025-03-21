import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #FFEBD9;
  align-items: center;
  padding: 24px 0;
  position: relative;
`;

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
`;

export const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

export const Title = styled.h1`
  color: #E66767;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 80px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`

export const Text = styled.p`
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
`;