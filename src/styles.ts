import { createGlobalStyle } from 'styled-components'

export const cores = {
  background: '#FFF8F2',
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
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
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px'
}

export const theme = {
  breakpoints,
  media: {
    mobile: `@media (max-width: ${breakpoints.mobile})`,
    tablet: `@media (max-width: ${breakpoints.tablet})`,
    laptop: `@media (max-width: ${breakpoints.laptop})`,
    desktop: `@media (max-width: ${breakpoints.desktop})`
  }
}
