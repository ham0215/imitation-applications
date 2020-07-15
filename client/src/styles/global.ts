import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    min-height: 100%;
    color: ${({ theme }: any) => theme.textBody};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
