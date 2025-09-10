import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Mantine
import { createTheme, MantineProvider } from '@mantine/core';

// 1. Import Mantine's base styles -- VERY IMPORTANT!
import '@mantine/core/styles.css';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    {/* 2. Wrap your entire App component with the MantineProvider */}
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>
);




