import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
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
  /* Drifting colour orbs that the glass surfaces blur and refract. */
  .bg-orbs{
    position: fixed;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }
  .bg-orbs span{
    position: absolute;
    border-radius: 999px;
    filter: blur(70px);
    opacity: 0.42;
    will-change: transform;
  }
  .bg-orbs span:nth-child(1){
    width: 420px;
    height: 420px;
    left: -140px;
    top: 16vh;
    background: #41bca8;
    animation: orbDrift 28s ease-in-out infinite;
  }
  .bg-orbs span:nth-child(2){
    width: 460px;
    height: 460px;
    right: -180px;
    bottom: 8vh;
    background: #3d7fcb;
    animation: orbDrift 34s ease-in-out -8s infinite reverse;
  }
  .bg-orbs span:nth-child(3){
    width: 300px;
    height: 300px;
    left: 55%;
    top: -120px;
    background: #c98a3e;
    opacity: 0.2;
    animation: orbDrift 40s ease-in-out -16s infinite;
  }
  @keyframes orbDrift{
    0%, 100%{ transform: translate3d(0, 0, 0) scale(1); }
    33%{ transform: translate3d(70px, -50px, 0) scale(1.08); }
    66%{ transform: translate3d(-40px, 60px, 0) scale(0.95); }
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
  :focus-visible{
    outline: 2px solid rgba(99, 209, 191, 0.8);
    outline-offset: 3px;
    border-radius: 8px;
  }
  .container {
    max-width: 1180px;
    width: 90%;
    margin: 0 auto;
  }

  /* Route change: the new page fades up. */
  .page-enter{
    animation: pageIn 0.6s var(--ease-out) backwards;
  }
  @keyframes pageIn{
    from{ opacity: 0; transform: translateY(14px); }
    to{ opacity: 1; transform: none; }
  }

  /* Scroll reveal, toggled by <Reveal />. */
  .reveal{
    opacity: 0;
    transform: translateY(24px) scale(0.985);
    transition: opacity 0.8s var(--ease-out), transform 0.9s var(--ease-out);
  }
  .reveal.is-visible{
    opacity: 1;
    transform: none;
  }

  @media only screen and (max-width: 768px){
    .bg-orbs span{
      filter: blur(50px);
    }
  }
  @media (prefers-reduced-motion: reduce){
    *, *::before, *::after{
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
    .reveal{
      opacity: 1;
      transform: none;
    }
  }
`;
export default GlobalStyles;
