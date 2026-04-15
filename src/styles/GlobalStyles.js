import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg: #11151d;
    --gray-1: #d9e1ee;
    --deep-dark: #1b2433;
    --gray-2: #2a3446;
    --white : #f7f9fd;
    --black: #05070b;
    --ink-1: #9fb3cc;
    --ink-2: #7f93ad;
    --accent: #63d1bf;
    --accent-2: #f0b46a;
    --surface: rgba(255, 255, 255, 0.04);
    --surface-border: rgba(255, 255, 255, 0.12);
    --shadow-soft: 0 16px 42px rgba(0, 0, 0, 0.35);
    --deep-bg: #101722;
  }
  html{
    font-size: 10px;
    font-family: 'RobotoMono Regular';
    background-color: var(--dark-bg);
    scroll-behavior: smooth;
  }
  body{
    background: radial-gradient(circle at 15% 15%, #263854 0%, transparent 34%),
      radial-gradient(circle at 84% 4%, #1f5d6c 0%, transparent 25%),
      linear-gradient(160deg, #0d121a 0%, #111825 44%, #11151d 100%);
    min-height: 100vh;
    color: var(--gray-1);
  }
  body::before,
  body::after{
    content: '';
    position: fixed;
    pointer-events: none;
    border-radius: 999px;
    filter: blur(60px);
    opacity: 0.3;
    z-index: -1;
  }
  body::before{
    width: 380px;
    height: 380px;
    left: -120px;
    top: 18vh;
    background: #41bca8;
  }
  body::after{
    width: 420px;
    height: 420px;
    right: -160px;
    bottom: 10vh;
    background: #3d7fcb;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  p{
    color: var(--ink-1);
  }
  ::selection{
    background: rgba(99, 209, 191, 0.3);
    color: var(--white);
  }
  .container {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--deep-bg);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;