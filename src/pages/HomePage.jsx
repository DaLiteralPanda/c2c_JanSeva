import { Container, SimpleGrid, Title, Text } from '@mantine/core';
import { useOutletContext } from 'react-router-dom';
import { NgoCard } from '../components/NgoCard'; // Make sure this path is correct
import { useState } from 'react';

// The full list of NGOs. You can move this to a separate data.js file later.
const dummyNgoData = [
  { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Child Welfare & Education', location: 'Parel, Mumbai, Maharashtra' },
  { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Environment & Climate Action', location: 'Parel, Mumbai, Maharashtra' },
  { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and aid to remote villages.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Healthcare & Nutrition', location: 'Parel, Mumbai, Maharashtra' },
  // ... and the rest of your dummy data ..., location: 'Parel, Mumbai, Maharashtra'
  { id: 16, name: 'Aman Shanti Mission', description: 'Promoting peace and spiritual harmony through community events.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Peace, Harmony & Spiritual Growth', location: 'Parel, Mumbai, Maharashtra' },
  { id: 17, name: 'Kala Sanskriti Foundation', description: 'Promoting traditional Indian arts and supporting local artisans.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Arts, Culture & Heritage', location: 'Parel, Mumbai, Maharashtra' },
  { id: 18, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 19, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 20, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 21, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 22, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 23, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra' },
  { id: 24, name: 'Udyog Pathshala', description: 'Equipping unemployed youth with vocational skills for a better future.', image: 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png', category: 'Livelihood & Skill Development', location: 'Parel, Mumbai, Maharashtra'}
];

export function HomePage() {
  // 1. Get the LIVE search and filter values from the parent App component
  const { searchTerm, selectedCategories } = useOutletContext();

  // 2. The full, unfiltered list of NGOs is stored here
  const [ngos, setNgos] = useState(dummyNgoData);

  // 3. This logic filters the full list based on the values from the navbar
  const filteredNgos = ngos
    .filter((ngo) =>
      // First, filter by the search term
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((ngo) => {
      // Then, filter by any selected categories
      if (selectedCategories.length === 0) return true; // If no categories are checked, show all
      return selectedCategories.includes(ngo.category);
    });

  return (
    <>
      <Container size="xl" py="xl" style={{ textAlign: 'center' }}>
        <Title order={1} sx={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Empowering NGOs, Connecting Hearts
        </Title>
        <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
          Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
        </Text>
      </Container>

      {/* 4. This section displays the title and the grid of cards */}
      <Container my="md" size="xl">
        <Title order={2} mb="xl">Discover NGOs</Title>
        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 }]}
        >
          {/* We map over the FINAL filteredNgos list to render the cards */}
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