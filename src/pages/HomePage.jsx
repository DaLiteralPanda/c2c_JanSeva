import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { useOutletContext } from 'react-router-dom';
import { NgoCard } from '../components/NgoCard'; // Make sure this path is correct
import { useState } from 'react';

// The same dummy data we had before
const dummyNgoData = [
  { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children.', image: 'https://via.placeholder.com/400x200.png?text=Education', category: 'Education' },
  { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation.', image: 'https://via.placeholder.com/400x200.png?text=Environment', category: 'Environment' },
  { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and aid to remote villages.', image: 'https://via.placeholder.com/400x200.png?text=Healthcare', category: 'Healthcare' },
  { id: 4, name: 'Senior Support Services', description: 'Offering companionship and care for the elderly.', image: 'https://via.placeholder.com/400x200.png?text=Elderly+Care', category: 'Elderly Care' },
  { id: 5, name: 'Women Empowerment Hub', description: 'Providing skill training and support for women entrepreneurs.', image: 'https://via.placeholder.com/400x200.png?text=Empowerment', category: 'Empowerment' },
  { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing and rehoming stray animals in the city.', image: 'https://via.placeholder.com/400x200.png?text=Animal+Welfare', category: 'Animal Welfare' },
];

export function HomePage() {
  // 1. Get the LIVE search and filter values from the parent App component
  const { searchTerm, selectedCategories } = useOutletContext();

  // 2. The full, unfiltered list of NGOs is stored here
  const [ngos, setNgos] = useState(dummyNgoData);
  // 1. Create a new state to hold the search term
  const [searchTerm, setSearchTerm] = useState('');

  // 2. Create a new list of NGOs that is filtered based on the search term
  const filteredNgos = ngos.filter((ngo) =>
    ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* We've moved the Hero section's code here */}
      <Container size="md" py="xl" style={{ textAlign: 'center' }}>
        <Title
          order={1}
          sx={{ fontSize: '2.5rem', fontWeight: 800 }}
        >
          Empowering NGOs, Connecting Hearts
        </Title>
        <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
          Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
        </Text>
        <TextInput
          placeholder="Search NGOs by name or cause..."
          size="lg"
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          mt="xl"
          mx="auto"
          maw={580}
          // 3. Connect the input to our state
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
        />
      </Container>

      {/* 4. This section displays the title and the grid of cards */}
      <Container my="md" size="xl">
        <Title order={2} mb="xl">Discover NGOs</Title>
        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[
            { maxWidth: 'md', cols: 2, spacing: 'md' },
            { maxWidth: 'sm', cols: 1, spacing: 'sm' },
          ]}
        >
          {/* 4. Map over the NEW filtered list */}
          {filteredNgos.map((ngo) => (
            <NgoCard
              key={ngo.id}
              // Pass all the data for one NGO to the NgoCard component
              {...ngo} 
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}