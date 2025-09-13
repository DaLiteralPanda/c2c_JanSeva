import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { NgoDetailPage } from './pages/NgoDetailPage.jsx';
import { AboutPage } from './pages/AboutPage.jsx'; 
import { ContactPage } from './pages/ContactPage.jsx';
import { AuthPage } from './pages/AuthPage.jsx';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';

import './index.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

// Define the routes for our application
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // App is now the main layout
    children: [
      { index: true, element: <HomePage /> },
      { path: "ngo/:id", element: <NgoDetailPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "login", element: <AuthPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
);