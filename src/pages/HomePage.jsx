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

// import { Container, SimpleGrid, Title, TextInput, Text } from '@mantine/core';
// import { IconSearch } from '@tabler/icons-react';
// import { NgoCard } from '../components/NgoCard';
// import { useState } from 'react';

// // The same dummy data we had before
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
//   // 1. Create a new state to hold the search term
//   const [searchTerm, setSearchTerm] = useState('');

//   // 2. Create a new list of NGOs that is filtered based on the search term
//   const filteredNgos = ngos.filter((ngo) =>
//     ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       {/* We've moved the Hero section's code here */}
//       <Container size="md" py="xl" style={{ textAlign: 'center' }}>
//         <Title
//           order={1}
//           sx={{ fontSize: '2.5rem', fontWeight: 800 }}
//         >
//           Empowering NGOs, Connecting Hearts
//         </Title>
//         <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
//           Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
//         </Text>
//         <TextInput
//           placeholder="Search NGOs by name or cause..."
//           size="lg"
//           icon={<IconSearch size={18} stroke={1.5} />}
//           radius="xl"
//           mt="xl"
//           mx="auto"
//           maw={580}
//           // 3. Connect the input to our state
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.currentTarget.value)}
//         />
//       </Container>

//       <Container my="md">
//         <Title order={2} mb="xl">Discover NGOs</Title>
//         <SimpleGrid
//           cols={3}
//           spacing="xl"
//           breakpoints={[
//             { maxWidth: 'md', cols: 2, spacing: 'md' },
//             { maxWidth: 'sm', cols: 1, spacing: 'sm' },
//           ]}
//         >
//           {/* 4. Map over the NEW filtered list */}
//           {filteredNgos.map((ngo) => (
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

// import { Container, SimpleGrid, Title, TextInput, Text, Checkbox, Group, Popover, Button } from '@mantine/core';
// import { IconSearch, IconFilter } from '@tabler/icons-react';
// import { NgoCard } from '../components/NgoCard';
// import { useState } from 'react';

// const dummyNgoData = [
//   { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children.', image: 'https://via.placeholder.com/400x200.png?text=Education', category: 'Education' },
//   { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation.', image: 'https://via.placeholder.com/400x200.png?text=Environment', category: 'Environment' },
//   { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and aid to remote villages.', image: 'https://via.placeholder.com/400x200.png?text=Healthcare', category: 'Healthcare' },
//   { id: 4, name: 'Senior Support Services', description: 'Offering companionship and care for the elderly.', image: 'https://via.placeholder.com/400x200.png?text=Elderly+Care', category: 'Elderly Care' },
//   { id: 5, name: 'Women Empowerment Hub', description: 'Providing skill training and support for women entrepreneurs.', image: 'https://via.placeholder.com/400x200.png?text=Empowerment', category: 'Empowerment' },
//   { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing and rehoming stray animals in the city.', image: 'https://via.placeholder.com/400x200.png?text=Animal+Welfare', category: 'Animal Welfare' },
// ];

// const allCategories = ['Education', 'Environment', 'Healthcare', 'Elderly Care', 'Empowerment', 'Animal Welfare'];

// export function HomePage() {
//   const [ngos, setNgos] = useState(dummyNgoData);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedCategories, setSelectedCategories] = useState([]);

//   const filteredNgos = ngos
//     .filter((ngo) =>
//       ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .filter((ngo) => {
//       if (selectedCategories.length === 0) return true;
//       return selectedCategories.includes(ngo.category);
//     });

//   return (
//     <>
//       <Container size="md" py="xl" style={{ textAlign: 'center' }}>
//         {/* --- Hero Section (No Changes Here) --- */}
//         <Title order={1} sx={{ fontSize: '2.5rem', fontWeight: 800 }}>
//           Empowering NGOs, Connecting Hearts
//         </Title>
//         <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
//           Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
//         </Text>
//         <TextInput
//           placeholder="Search NGOs by name or cause..."
//           size="lg"
//           icon={<IconSearch size={18} stroke={1.5} />}
//           radius="xl"
//           mt="xl"
//           mx="auto"
//           maw={580}
//           value={searchTerm}
//           onChange={(event) => setSearchTerm(event.currentTarget.value)}
//         />
//       </Container>

//       <Container my="md">
//         <Group position="apart" mb="xl">
//           <Title order={2}>Discover NGOs</Title>

//           {/* --- 1. START: POPOVER REPLACEMENT --- */}
//           <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
//             <Popover.Target>
//               <Button leftIcon={<IconFilter size={16} />}>Filter by Cause</Button>
//             </Popover.Target>
//             <Popover.Dropdown>
//               <Checkbox.Group
//                 label="Select categories to display"
//                 value={selectedCategories}
//                 onChange={setSelectedCategories}
//               >
//                 <Group mt="xs">
//                   {allCategories.map((category) => (
//                     <Checkbox key={category} value={category} label={category} />
//                   ))}
//                 </Group>
//               </Checkbox.Group>
//               {/* 2. A nice UX improvement: a clear button! */}
//               <Button fullWidth mt="md" variant="light" onClick={() => setSelectedCategories([])}>
//                 Clear Filters
//               </Button>
//             </Popover.Dropdown>
//           </Popover>
//           {/* --- END: POPOVER REPLACEMENT --- */}
//         </Group>

//         <SimpleGrid
//           cols={3}
//           // ... (rest of the SimpleGrid is the same)
//         >
//           {filteredNgos.map((ngo) => (
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

import { Container, SimpleGrid, Title, TextInput, Text, Checkbox, Group, Popover, Button } from '@mantine/core';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { NgoCard } from '../components/NgoCard';
import { useState } from 'react';

// 1. Expanded dummy data to include all your new categories
const dummyNgoData = [
  { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children.', image: 'https://via.placeholder.com/400x200.png?text=Education', category: 'Child Welfare & Education' },
  { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation.', image: 'https://via.placeholder.com/400x200.png?text=Environment', category: 'Environment & Climate Action' },
  { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and aid to remote villages.', image: 'https://via.placeholder.com/400x200.png?text=Healthcare', category: 'Healthcare & Nutrition' },
  { id: 4, name: 'Senior Support Services', description: 'Offering companionship and care for the elderly.', image: 'https://via.placeholder.com/400x200.png?text=Elderly+Care', category: 'Senior Citizen Support' },
  { id: 5, name: 'Empowerment Hub', description: 'Providing skill training and support for women entrepreneurs.', image: 'https://via.placeholder.com/400x200.png?text=Empowerment', category: 'Women Empowerment' },
  { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing and rehoming stray animals in the city.', image: 'https://via.placeholder.com/400x200.png?text=Animal+Welfare', category: 'Animal Welfare & Gaushala' },
  { id: 7, name: 'Mind Matters Initiative', description: 'Offering free counseling and mental health support.', image: 'https://via.placeholder.com/400x200.png?text=Mental+Health', category: 'Disability & Mental Health' },
  { id: 8, name: 'Rural Roots Foundation', description: 'Working on infrastructure and sanitation projects in rural areas.', image: 'https://via.placeholder.com/400x200.png?text=Rural+Dev', category: 'Rural Development' },
  { id: 9, name: 'The Agri-Support Network', description: 'Supporting farmers with sustainable agriculture techniques.', image: 'https://via.placeholder.com/400x200.png?text=Farming', category: 'Farmer & Agriculture Support' },
  { id: 10, name: 'Rapid Response Team', description: 'Providing immediate relief and aid during natural disasters.', image: 'https://via.placeholder.com/400x200.png?text=Disaster+Relief', category: 'Disaster Relief & Emergency Aid' },
  { id: 11, name: 'Justice for All League', description: 'Offering free legal aid and advocating for human rights.', image: 'https://via.placeholder.com/400x200.png?text=Human+Rights', category: 'Human Rights & Legal Aid' },
  { id: 12, name: 'Skill-Up India', description: 'Running vocational training centers for unemployed youth.', image: 'https://via.placeholder.com/400x200.png?text=Skill+Dev', category: 'Livelihood & Skill Development' },
  { id: 13, name: 'Heritage Keepers Trust', description: 'Preserving local art forms, culture, and historical sites.', image: 'https://via.placeholder.com/400x200.png?text=Culture', category: 'Arts, Culture & Heritage' },
  { id: 14, name: 'Digital Bridge Foundation', description: 'Providing digital literacy and technology access to remote communities.', image: 'https://via.placeholder.com/400x200.png?text=Tech+Literacy', category: 'Digital Literacy & Technology' },
  { id: 15, name: 'The Full Plate Project', description: 'Combating hunger by distributing meals to those in need.', image: 'https://via.placeholder.com/400x200.png?text=Food+Security', category: 'Food Security & Hunger Relief' },
  { id: 16, name: 'Aman Shanti Mission', description: 'Promoting peace and spiritual harmony through community events.', image: 'https://via.placeholder.com/400x200.png?text=Peace', category: 'Peace, Harmony & Spiritual Growth' },
];

// 2. The new, expanded list of categories
const allCategories = [
  'Women Empowerment', 'Child Welfare & Education', 'Healthcare & Nutrition', 'Senior Citizen Support', 'Disability & Mental Health',
  'Animal Welfare & Gaushala', 'Environment & Climate Action', 'Rural Development', 'Farmer & Agriculture Support',
  'Disaster Relief & Emergency Aid', 'Human Rights & Legal Aid', 'Livelihood & Skill Development', 'Arts, Culture & Heritage',
  'Digital Literacy & Technology', 'Food Security & Hunger Relief', 'Peace, Harmony & Spiritual Growth',
];

export function HomePage() {
  const [ngos, setNgos] = useState(dummyNgoData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);

  // The filtering logic remains exactly the same!
  const filteredNgos = ngos
    .filter((ngo) =>
      ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ngo.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((ngo) => {
      if (selectedCategories.length === 0) return true;
      return selectedCategories.includes(ngo.category);
    });

  return (
    <>
      <Container size="md" py="xl" style={{ textAlign: 'center' }}>
        <Title order={1} sx={{ fontSize: '2.5rem', fontWeight: 800 }}>
          Empowering NGOs, Connecting Hearts
        </Title>
        <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
          Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
        </Text>

        {/* 3. The new, combined search and filter component */}
        <TextInput
          placeholder="Search NGOs..."
          size="lg"
          radius="xl"
          mt="xl"
          mx="auto"
          maw={700}
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.currentTarget.value)}
          rightSection={
            // HERE IS THE POPOVER YOU NEED TO EDIT
            <Popover width={500} trapFocus position="bottom-end" withArrow shadow="md" withinPortal={false} middlewares={{ flip: false }}> {/* <-- Increased width here */}
              <Popover.Target>
                <Button variant="subtle" color="gray" rightIcon={<IconFilter size={16} />} mr="xs">
                  Categories
                </Button>
              </Popover.Target>
              <Popover.Dropdown>
                <Checkbox.Group
                  label="Filter by cause"
                  value={selectedCategories}
                  onChange={setSelectedCategories}
                  // --- ADD THESE STYLES TO MAKE IT SCROLLABLE ---
                  sx={{ maxHeight: 300, overflowY: 'auto', paddingRight: 'var(--mantine-spacing-sm)' }}
                  // ---------------------------------------------
                >
                  <SimpleGrid cols={2} mt="xs">
                    {allCategories.map((category) => (
                      <Checkbox key={category} value={category} label={category} />
                    ))}
                  </SimpleGrid>
                </Checkbox.Group>
                <Button fullWidth mt="md" variant="light" onClick={() => setSelectedCategories([])}>
                  Clear Filters
                </Button>
              </Popover.Dropdown>
            </Popover>
          }
          rightSectionWidth={120}
        />
      </Container>

      <Container my="md">
        <Title order={2} mb="xl">Discover NGOs</Title>
        <SimpleGrid
          cols={3}
          spacing="xl"
          breakpoints={[ { maxWidth: 'md', cols: 2 }, { maxWidth: 'sm', cols: 1 } ]}
        >
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