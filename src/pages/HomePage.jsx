// import { Container, SimpleGrid, Title, Alert, Button } from '@mantine/core';
// import { Hero } from '../components/Hero';
// import { NgoCard } from '../components/NgoCard';
// import { useState } from 'react';
// import { IconAlertTriangle } from '@tabler/icons-react';

// // The same dummy data we had in App.jsx
// const dummyNgoData = [
//   { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children.', image: 'https://via.placeholder.com/400x200.png?text=Education', category: 'Education' },
//   { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation.', image: 'https://via.placeholder.com/400x200.png?text=Environment', category: 'Environment' },
//   { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and aid to remote villages.', image: 'https://via.placeholder.com/400x200.png?text=Healthcare', category: 'Healthcare' },
//   { id: 4, name: 'Senior Support Services', description: 'Offering companionship and care for the elderly.', image: 'https://via.placeholder.com/400x200.png?text=Elderly+Care', category: 'Elderly Care' },
//   { id: 5, name: 'Women Empowerment Hub', description: 'Providing skill training and support for women entrepreneurs.', image: 'https://via.placeholder.com/400x200.png?text=Empowerment', category: 'Empowerment' },
//   { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing and rehoming stray animals in the city.', image: 'https://via.placeholder.com/400x200.png?text=Animal+Welfare', category: 'Animal Welfare' },
// ];

// export function HomePage() {
//   const [ngos, setNgos] = useState(dummyNgoData);

//   return (
//     <>
//       <Hero />
//       <Container my="md">
//         <Alert
//             icon={<IconAlertTriangle size="1.5rem" />}
//             title="URGENT: PUNJAB FLOOD RELIEF"
//             color="red"
//             variant="filled"
//             withCloseButton
//             mb="xl"
//         >
//             Thousands are displaced and in need of immediate aid. Your donation can provide essential supplies like food, water, and shelter.
//             <Button color="white" variant="outline" mt="md">
//                 Donate Now
//             </Button>
//         </Alert>

//         <Title order={2} mb="xl">Discover NGOs</Title>
//         <SimpleGrid
//           cols={3}
//           spacing="xl"
//           breakpoints={[
//             { maxWidth: 'md', cols: 2, spacing: 'md' },
//             { maxWidth: 'sm', cols: 1, spacing: 'sm' },
//           ]}
//         >
//           {ngos.map((ngo) => (
//             <NgoCard
//               key={ngo.id}
//               id={ngo.id}
//               image={ngo.image}
//               name={ngo.name}
//               description={ngo.description}
//               category={ngo.category}
//             />
//           ))}
//         </SimpleGrid>
//       </Container>
//     </>
//   );
// }

import { Container, SimpleGrid, Title, TextInput, Text } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { NgoCard } from '../components/NgoCard';
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

      <Container my="md">
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
              id={ngo.id}
              image={ngo.image}
              name={ngo.name}
              description={ngo.description}
              category={ngo.category}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}