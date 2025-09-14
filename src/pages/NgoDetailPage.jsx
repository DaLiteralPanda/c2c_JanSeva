// // import { useParams } from 'react-router-dom';
// // import { Container, Grid, Image, Title, Text, Badge, Paper, Group } from '@mantine/core';

// // // For now, we'll copy the same dummy data here.
// // // In a real app, you'd fetch this from a single source.
// // const dummyNgoData = [
// //   { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children in urban areas. Our mission is to ensure every child has access to quality learning opportunities.', image: 'https://via.placeholder.com/800x400.png?text=Education+Project', category: 'Education' },
// //   { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation across Karnataka. We organize tree-planting drives and awareness campaigns.', image: 'https://via.placeholder.com/800x400.png?text=Tree+Planting', category: 'Environment' },
// //   { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and primary healthcare services to remote villages that lack access to hospitals.', image: 'https://via.placeholder.com/800x400.png?text=Medical+Camp', category: 'Healthcare' },
// //   { id: 4, name: 'Senior Support Services', description: 'Offering companionship, daily assistance, and care for the elderly in our community, ensuring they live with dignity.', image: 'https://via.placeholder.com/800x400.png?text=Elderly+Care', category: 'Elderly Care' },
// //   { id: 5, name: 'Women Empowerment Hub', description: 'Providing skill training, financial literacy, and support for women entrepreneurs to start their own businesses.', image: 'https://via.placeholder.com/800x400.png?text=Skill+Training', category: 'Empowerment' },
// //   { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing, treating, and rehoming stray and abandoned animals in the city. We run a shelter and adoption program.', image: 'https://via.placeholder.com/800x400.png?text=Animal+Shelter', category: 'Animal Welfare' },
// // ];

// // export function NgoDetailPage() {
// //   // 1. Get the 'id' from the URL
// //   const { id } = useParams();

// //   // 2. Find the specific NGO from our data array
// //   const ngo = dummyNgoData.find((item) => item.id === parseInt(id));

// //   // 3. A safety check in case the NGO isn't found
// //   if (!ngo) {
// //     return <Container><Title>NGO not found!</Title></Container>;
// //   }

// //   // 4. Display the NGO's details
// //   return (
// //     <Container my="md">
// //       <Paper shadow="md" p="xl" radius="md">
// //         <Grid>
// //           <Grid.Col span={12}>
// //             <Image radius="md" src={ngo.image} alt={ngo.name} />
// //           </Grid.Col>
// //           <Grid.Col span={12}>
// //             <Group position="apart" mt="md">
// //               <Title order={1}>{ngo.name}</Title>
// //               <Badge size="lg" color="green">{ngo.category}</Badge>
// //             </Group>
// //             <Text mt="lg" color="dimmed" size="lg">{ngo.description}</Text>
// //           </Grid.Col>
// //         </Grid>
// //       </Paper>
// //     </Container>
// //   );
// // }

// import { useParams, Link } from 'react-router-dom';
// import { Container, Grid, Image, Title, Text, Badge, Paper, Group, Accordion, Button } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks'; // <-- 1. Import the hook
// import { Modal } from '@mantine/core'; // <-- 2. Import the Modal component

// // ... (the dummyNgoData array remains the same)
// const dummyNgoData = [
//   { id: 1, name: 'Bright Futures Foundation', description: 'Providing education and resources to underprivileged children in urban areas. Our mission is to ensure every child has access to quality learning opportunities.', image: 'https://via.placeholder.com/800x400.png?text=Education+Project', category: 'Education' },
//   { id: 2, name: 'Green Earth Alliance', description: 'Focused on reforestation projects and environmental conservation across Karnataka. We organize tree-planting drives and awareness campaigns.', image: 'https://via.placeholder.com/800x400.png?text=Tree+Planting', category: 'Environment' },
//   { id: 3, name: 'Healthcare Heroes', description: 'Delivering medical supplies and primary healthcare services to remote villages that lack access to hospitals.', image: 'https://via.placeholder.com/800x400.png?text=Medical+Camp', category: 'Healthcare' },
//   { id: 4, name: 'Senior Support Services', description: 'Offering companionship, daily assistance, and care for the elderly in our community, ensuring they live with dignity.', image: 'https://via.placeholder.com/800x400.png?text=Elderly+Care', category: 'Elderly Care' },
//   { id: 5, name: 'Women Empowerment Hub', description: 'Providing skill training, financial literacy, and support for women entrepreneurs to start their own businesses.', image: 'https://via.placeholder.com/800x400.png?text=Skill+Training', category: 'Empowerment' },
//   { id: 6, name: 'Animal Angels Rescue', description: 'Rescuing, treating, and rehoming stray and abandoned animals in the city. We run a shelter and adoption program.', image: 'https://via.placeholder.com/800x400.png?text=Animal+Shelter', category: 'Animal Welfare' },
// ];

// export function NgoDetailPage() {
//   const [opened, { open, close }] = useDisclosure(false); // <-- 3. Set up the modal state
//   const { id } = useParams();
//   const ngo = dummyNgoData.find((item) => item.id === parseInt(id));

//   if (!ngo) {
//     return <Container><Title>NGO not found!</Title></Container>;
//   }

//   return (
//     <>
//       {/* 4. Add the Modal component */}
//       <Modal opened={opened} onClose={close} title="Donation Successful!" centered>
//         <Text>Thank you, Ayush, for your donation of ₹500 to **{ngo.name}**!</Text>
//         <Text size="sm" mt="sm">Your contribution will make a real difference.</Text>
//         <Button
//           component="a"
//           href="/certificate-placeholder.png" // This links to a fake certificate
//           target="_blank"
//           fullWidth
//           mt="xl"
//         >
//           Download Your Certificate
//         </Button>
//       </Modal>

//       <Container my="md">
//         <Paper shadow="md" p="xl" radius="md">
//           <Grid>
//             <Grid.Col span={8}>
//               <Image radius="md" src={ngo.image} alt={ngo.name} />
//               <Group position="apart" mt="md">
//                 <Title order={1}>{ngo.name}</Title>
//                 <Badge size="lg" color="green">{ngo.category}</Badge>
//               </Group>
//               <Text mt="lg" color="dimmed" size="lg">{ngo.description}</Text>
//               <Accordion mt="xl">
//                 <Accordion.Item value="verification">
//                   <Accordion.Control>
//                     <Text weight={500}>Trust & Verification</Text>
//                   </Accordion.Control>
//                   <Accordion.Panel>
//                     <Text size="sm">
//                       This NGO has been manually verified by the JanSeva team and is registered on the official NGO Darpan Portal.
//                       <br /><br />
//                       <strong>Registration ID:</strong> NGO/12345/2021
//                     </Text>
//                   </Accordion.Panel>
//                 </Accordion.Item>
//               </Accordion>
//             </Grid.Col>

//             <Grid.Col span={4}>
//               {/* 5. Add the "Donate Now" button */}
//               <Paper withBorder p="md" radius="md">
//                 <Title order={3} mb="md">Make a Difference</Title>
//                 <Button fullWidth size="lg" onClick={open}>
//                   Donate Now
//                 </Button>
//                 <Text size="xs" color="dimmed" mt="sm">All donations are processed securely.</Text>
//               </Paper>
//             </Grid.Col>
//           </Grid>
//         </Paper>
//       </Container>
//     </>
//   );
// }

import { useParams } from 'react-router-dom';
import { Container, Title, Text, Grid, Image, Paper, Button, List, ThemeIcon, Stack } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { dummyNgos } from '../data/dummyNgos'; // <-- Imports from our new central file!
import classes from './NgoDetailPage.module.css';

export function NgoDetailPage() {
  const { id } = useParams();
  // Find the correct NGO from the imported list
  const ngo = dummyNgos.find((item) => item.id === parseInt(id));

  // If no NGO is found for the given ID, show a message.
  if (!ngo) {
    return (
      <Container pt={80} ta="center">
        <Title>NGO Not Found</Title>
        <Text>Sorry, we couldn't find the NGO you're looking for.</Text>
      </Container>
    );
  }

  return (
    <Container size="lg" my="xl">
      {/* ====== TOP SECTION: INFO & IMAGE ====== */}
      <Paper withBorder radius="md" p="xl" shadow="sm">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={1} className={classes.mainTitle}>{ngo.name}</Title>
            <Text mt="md" c="dimmed">{ngo.description}</Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image src={ngo.image} radius="md" alt={ngo.name} />
          </Grid.Col>
        </Grid>
      </Paper>

      {/* ====== BOTTOM SECTION: DETAILS & ACTIONS ====== */}
      <Grid mt="xl" gutter="xl">
        {/* --- Left Column: Endeavors --- */}
        <Grid.Col span={{ base: 12, md: 7 }}>
          <Stack>
            <Title order={2} className={classes.sectionTitle}>Past Endeavors</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={<ThemeIcon color="green" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>}
            >
              {ngo.pastEndeavors.map((item, index) => <List.Item key={index}>{item}</List.Item>)}
            </List>

            <Title order={2} mt="lg" className={classes.sectionTitle}>Future Endeavors</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={<ThemeIcon color="blue" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>}
            >
              {ngo.futureEndeavors.map((item, index) => <List.Item key={index}>{item}</List.Item>)}
            </List>
          </Stack>
        </Grid.Col>

        {/* --- Right Column: Help & Needs --- */}
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Stack>
            <Paper withBorder radius="md" p="xl" className={classes.helpBox}>
              <Title order={3} ta="center">How you can help</Title>
              <Button fullWidth mt="md" size="lg" className={classes.donateButton}>Donate Now</Button>
              <Button fullWidth mt="sm" size="lg" variant="default" className={classes.volunteerButton}>Volunteer</Button>
            </Paper>

            <Title order={2} mt="lg" className={classes.sectionTitle}>Donation Needs</Title>
            <List
              spacing="xs"
              size="sm"
              center
              icon={<ThemeIcon color="orange" size={24} radius="xl"><IconCircleCheck size={16} /></ThemeIcon>}
            >
              {ngo.donationNeeds.map((item, index) => <List.Item key={index}>{item}</List.Item>)}
            </List>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
}