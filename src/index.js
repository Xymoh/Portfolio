import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './styles/GlobalStyles';
import Typography from './styles/Typography';
import RobotoMonoRegular from './assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from './assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from './assets/fonts/Montserrat-Bold.ttf';

const container = document.getElementById('root');
const root = createRoot(container);

function renderApp() {
  root.render(
    <React.StrictMode>
      <GlobalStyles />
      <Typography />
      <App />
    </React.StrictMode>
  );
}

async function bootstrap() {
  if (!('fonts' in document) || typeof FontFace === 'undefined') {
    renderApp();
    return;
  }

  try {
    const fonts = [
      new FontFace(
        'RobotoMono Regular',
        `url(${RobotoMonoRegular}) format('truetype')`
      ),
      new FontFace(
        'Montserrat SemiBold',
        `url(${MontserratSemiBold}) format('truetype')`
      ),
      new FontFace(
        'Montserrat Bold',
        `url(${MontserratBold}) format('truetype')`
      ),
    ];

    const loadedFonts = await Promise.all(fonts.map((font) => font.load()));
    loadedFonts.forEach((font) => document.fonts.add(font));
  } catch (error) {
    // Continue rendering even if font preloading fails in some browsers.
  }

  renderApp();
}

bootstrap();

reportWebVitals();