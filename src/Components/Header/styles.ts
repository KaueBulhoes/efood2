import styled from 'styled-components';

interface HeaderContainerProps {
  $height?: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  padding-top: 24px;
  position: relative;
  height: ${({ $height }) => $height || "384px"};
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
  margin: 0 109px;
`;

export const LogoImage = styled.img`
  width: 100px;
  position: absolute;
  right: calc(50% - 50px);
  top: 63px
`;

export const Title = styled.h1`
  color: #E66767;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin-top: 260px;
`;

export const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  top: 43px;
`

export const Text = styled.p`
  color: #E66767;
  font-weight: bold;
  font-size: 18px;
`;