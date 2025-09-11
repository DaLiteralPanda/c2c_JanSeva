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

import { Group, Button, Title, Modal, TextInput } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks'; // <-- 1. Import the hook and new components
import { Link } from 'react-router-dom';

export function Navbar() {
  // 2. Set up the state to control the modal
  const [opened, { open, close }] = useDisclosure(false);

  return (
    // 3. Wrap everything in a React Fragment (<>)
    <>
      <Modal opened={opened} onClose={close} title="Login / Sign Up" centered>
        <TextInput label="Email" placeholder="your@email.com" required />
        <TextInput label="Password" placeholder="Your password" type="password" mt="md" required />
        <Button fullWidth mt="xl">
          Submit
        </Button>
      </Modal>

      <Group position="apart" sx={{ height: '100%' }}>
        <Title order={3}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            JanSeva
          </Link>
        </Title>
        <Group>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="subtle" color="gray">Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button variant="subtle" color="gray">About Us</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button variant="subtle" color="gray">Contact Us</Button>
          </Link>
        </Group>
        <Group>
          {/* 4. Add the onClick event to open the modal */}
          <Button variant="default" onClick={open}>Log in</Button>
          <Button onClick={open}>Sign up</Button>
        </Group>
      </Group>
    </>
  );
}