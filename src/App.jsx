import { AppShell, MantineProvider } from '@mantine/core';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // Your HomePage component

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      // AppShell provides the main layout structure
    <AppShell
      header={{ height: 80 }} // Set the height to match your navbar
      padding="md"
    >
      {/* 1. Place your Navbar component in the header section */}
      <AppShell.Header>
        <Navbar />
      </AppShell.Header>

      {/* 2. Place your page content in the main section */}
      <AppShell.Main>
        {/* Here you would have your React Router setup to show different pages */}
        <HomePage />
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
  );
}