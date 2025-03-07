import { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Reboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.background};
  }

  .container {
    width: 100%;
    margin: 0 auto;
  }
`