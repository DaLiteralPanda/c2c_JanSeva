// import { Group, Button, Title } from '@mantine/core';
// import { Link } from 'react-router-dom'; // <-- Use Link instead of Anchor

// export function Navbar() {
//   return (
//     <Group position="apart" sx={{ height: '100%' }}>
//       <Title order={3}>
//         <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
//           JanSeva
//         </Link>
//       </Title>
//       <Group>
//         {/* These are now real links */}
//         <Link to="/" style={{ textDecoration: 'none' }}>
//           <Button variant="subtle" color="gray">Home</Button>
//         </Link>
//         <Link to="/about" style={{ textDecoration: 'none' }}>
//           <Button variant="subtle" color="gray">About Us</Button>
//         </Link>
//         <Link to="/contact" style={{ textDecoration: 'none' }}>
//           <Button variant="subtle" color="gray">Contact Us</Button>
//         </Link>
//       </Group>
//       <Group>
//         <Button variant="default">Log in</Button>
//         <Button>Sign up</Button>
//       </Group>
//     </Group>
//   );
// }

import { Container, Group, TextInput, Avatar, ActionIcon, rem, Burger, Drawer, Stack, Popover, Button, Checkbox, SimpleGrid} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'; // We'll use this for the mobile drawer
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const navLinks = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
];

export function Navbar({ searchTerm, setSearchTerm, selectedCategories, setSelectedCategories, allCategories }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  
  const items = navLinks.map((link) => ( <Link to={link.link} key={link.label} className={classes.link} onClick={closeDrawer}>{link.label}</Link> ));

  // 2. Create the Popover content here for reuse
  const filterPopover = (
    <Popover width={500} trapFocus position="bottom-end" withArrow shadow="md">
      <Popover.Target>
        <Button variant="subtle" color="gray" rightIcon={<IconFilter size={16} />} mr="xs">
          Categories
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Checkbox.Group label="Filter by cause" value={selectedCategories} onChange={setSelectedCategories} sx={{ maxHeight: 300, overflowY: 'auto' }}>
          <SimpleGrid cols={2} mt="xs">
            {allCategories.map((category) => ( <Checkbox key={category} value={category} label={category} /> ))}
          </SimpleGrid>
        </Checkbox.Group>
        <Button fullWidth mt="md" variant="light" onClick={() => setSelectedCategories([])}>
          Clear Filters
        </Button>
      </Popover.Dropdown>
    </Popover>
  );

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group justify="space-between" style={{ flex: 1 }} visibleFrom="sm">
          <Group gap={50}>{items}</Group>
          {/* 3. This is the advanced search bar, now in the navbar */}
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search NGOs"
            leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            className={classes.search}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.currentTarget.value)}
            rightSection={filterPopover}
            rightSectionWidth={120}
          />
          <ActionIcon variant="transparent" size={64} radius="xl">
            <Avatar src="../../public/profile_icon.png" alt="User profile" radius="xl" size={64}/>
          </ActionIcon>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
      </Container>
      {/* Drawer can also be updated to include filters if desired */}
      <Drawer opened={drawerOpened} onClose={closeDrawer} title="Menu" padding="md" size="md" hiddenFrom="sm">
        <Stack gap="lg">{items}</Stack>
      </Drawer>
    </header>
  );
}