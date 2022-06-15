import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Sora', sans-serif;
  }

  html, body {
    background: ${props => props.theme.colors.bgPrimary};
    background-size: cover;
    background-position: left bottom;
    color: ${props => props.theme.colors.clrTextPrimary};
    overflow-x: hidden;
  }

  *::-webkit-scrollbar, *::-webkit-scrollbar {
    width: 3px;
    height: 0;
    background-color: ${props => props.theme.colors.bgSecondary};
    overflow: visible;
  }

  *::-webkit-scrollbar-thumb, *::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.clrPrimary};
  }

  *::-webkit-scrollbar-button, *::-webkit-scrollbar-button {
    height: 0;
    width: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.clrTextSecondary};
  }
`
