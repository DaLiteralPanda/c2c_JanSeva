import { AppShell, MantineProvider } from '@mantine/core';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import { HomePage } from './pages/HomePage'; // Your HomePage component
import { useState } from 'react';

const allCategories = [
  'Women Empowerment', 'Child Welfare & Education', 'Healthcare & Nutrition', 'Senior Citizen Support', 'Disability & Mental Health',
  'Animal Welfare & Gaushala', 'Environment & Climate Action', 'Rural Development', 'Farmer & Agriculture Support',
  'Disaster Relief & Emergency Aid', 'Human Rights & Legal Aid', 'Livelihood & Skill Development', 'Arts, Culture & Heritage',
  'Digital Literacy & Technology', 'Food Security & Hunger Relief', 'Peace, Harmony & Spiritual Growth',
];

export default function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
    // AppShell provides the main layout structure
    <AppShell
      header={{ height: 80 }} // Set the height to match your navbar
      padding="md"
    >
      {/* 1. Place your Navbar component in the header section */}
      <AppShell.Header>
        {/* 3. Pass all the state and setters to the Navbar */}
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          allCategories={allCategories}
        />
      </AppShell.Header>

      <AppShell.Main>
        {/* 4. Outlet renders your pages. We pass state down to them */}
        <Outlet context={{ searchTerm, selectedCategories, allCategories }} />
      </AppShell.Main>
    </AppShell>
    </MantineProvider>
  );
}