import { Container, Group, TextInput, Avatar, ActionIcon, rem, Burger, Drawer, Stack, Popover, Button, Checkbox, SimpleGrid, Title, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconFilter } from '@tabler/icons-react';
import { Link, useLocation } from 'react-router-dom'; // <-- 1. Import useLocation
import classes from './NavBar.module.css';

const navLinks = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
];

export function Navbar({ searchTerm, setSearchTerm, selectedCategories, setSelectedCategories, allCategories }) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  // 2. Get the current location and check if it's the auth page
  const location = useLocation();
  const isAuthPage = location.pathname === '/login';
  
  const items = navLinks.map((link) => ( <Link to={link.link} key={link.label} className={classes.link} onClick={closeDrawer}>{link.label}</Link> ));

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

  // 3. If on the login page, show the simple, centered logo navbar
if (isAuthPage) {
    return (
      <header className={classes.header}>
        <Container size="xl" className={classes.inner}>
          <Group justify="center" style={{ flex: 1 }}>
            <Link to="/" className={classes.logoLink}>
            <Group gap="xs" align="center">
              {/* 2. Replace the <Title> with the <Image> component */}
              <Image 
                src="../../public/logo.png" 
                alt="JanSeva Logo" 
                h={80} // Set the height of the logo (e.g., 50px)
                w="auto" // Set width to auto to maintain aspect ratio
              />
              <Title order={1} className={classes.title}>
                  JanSeva
              </Title>
            </Group>
            </Link>
          </Group>
        </Container>
      </header>
    );
  }

  // 4. On all other pages, show your full, feature-rich navbar
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Group justify="space-between" style={{ flex: 1 }} visibleFrom="sm">
          <Group gap={50}>{items}</Group>
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
          {/* Your UI change for a larger icon is preserved */}
          <ActionIcon variant="transparent" size={64} radius="xl">
            {/* IMPORTANT: Corrected image path below */}
            <Avatar src="../../public/profile_icon.png" alt="User profile" radius="xl" size={64}/>
          </ActionIcon>
        </Group>
        <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
      </Container>
      <Drawer opened={drawerOpened} onClose={closeDrawer} title="Menu" padding="md" size="md" hiddenFrom="sm">
        <Stack gap="lg">{items}</Stack>
      </Drawer>
    </header>
  );
}