import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Button, Stack, Title } from '@mantine/core';

function App() {
  return (
    <Stack align="center" mt={50}>
      <Title>Welcome to JanSeva!</Title>
      <Button>This is a Mantine Button</Button>
    </Stack>
  );
}

export default App;
