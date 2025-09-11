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

import { Container, Group, TextInput, Avatar, ActionIcon, rem, Burger, Drawer, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'; // We'll use this for the mobile drawer
import { IconSearch } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './NavBar.module.css';

const navLinks = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About Us' },
];

export function Navbar() {
  // 1. Add a disclosure hook to manage the mobile drawer's open/close state
  const [opened, { toggle, close }] = useDisclosure(false);

  const items = navLinks.map((link) => (
    <Link to={link.link} key={link.label} className={classes.link} onClick={close}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        {/* 2. This entire group is now visible ONLY on screens larger than 'sm' */}
        <Group justify="space-between" style={{ flex: 1 }} visibleFrom="sm">
          {/* Left Section: Navigation Links */}
          <Group gap={50}>{items}</Group>

          {/* Center Section: Search Bar */}
          <TextInput
            radius="xl"
            size="md"
            placeholder="Search NGOs"
            leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} className={classes.search}/>}
            className={classes.search}
          />

          {/* Right Section: Profile Icon */}
          <ActionIcon variant="transparent" size={64} radius="xl">
            <Avatar src="../../public/profile_icon.png" alt="User profile" color="dark" radius="xl" size={64}/>
          </ActionIcon>
        </Group>

        {/* 3. The Burger (hamburger menu) is ONLY visible on screens smaller than 'sm' */}
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      </Container>

      {/* 4. The Drawer component for the mobile menu */}
      <Drawer
        opened={opened}
        onClose={close}
        title="Menu"
        padding="md"
        size="md"
        hiddenFrom="sm" // Also hidden on larger screens
      >
        <Stack gap="lg">
            {items}
            <ActionIcon variant="transparent" size="xl" radius="xl">
                <Avatar src={null} alt="User profile" color="dark" radius="xl" />
            </ActionIcon>
        </Stack>
      </Drawer>
    </header>
  );
}