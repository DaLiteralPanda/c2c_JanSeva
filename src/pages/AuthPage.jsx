import { useState } from 'react';
import { Paper, TextInput, PasswordInput, Button, Title, Text, SegmentedControl, Container } from '@mantine/core';
import classes from './AuthPage.module.css';

export function AuthPage() {
  // 1. State to manage whether we are in 'login' or 'signup' mode
  const [authMode, setAuthMode] = useState('signup');

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius="md" p="xl">
        {/* 2. Mantine's SegmentedControl is perfect for the toggle */}
        <SegmentedControl
          fullWidth
          size="md"
          radius="xl"
          value={authMode}
          onChange={setAuthMode}
          data={[
            { label: 'Login', value: 'login' },
            { label: 'Signup', value: 'signup' },
          ]}
          mb="xl"
        />

        <TextInput label="Email" placeholder="your@email.com" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        
        {/* We can add another field for 'Confirm Password' if signing up */}
        {authMode === 'signup' && (
            <PasswordInput label="Confirm Password" placeholder="Confirm password" required mt="md" />
        )}

        {/* 3. The button text changes based on the authMode state */}
        <Button fullWidth mt="xl" size="md" radius="xl">
          {authMode === 'signup' ? 'Signup' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
}