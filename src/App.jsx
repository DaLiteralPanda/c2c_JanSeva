import { AppShell, MantineProvider } from '@mantine/core';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <AppShell
        header={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header p="md">
          <Navbar />
        </AppShell.Header>

        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}