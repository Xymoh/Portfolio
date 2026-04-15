import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  html{
    font-family: 'RobotoMono Regular', 'Roboto Mono', monospace;
    color: var(--gray-1);
    line-height: 1.5;
  }
  *{
    font-family: 'RobotoMono Regular', 'Roboto Mono', monospace;
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Montserrat Bold', 'Montserrat SemiBold', 'Segoe UI', sans-serif;
    letter-spacing: 0.02em;
  }
`;

export default Typography;