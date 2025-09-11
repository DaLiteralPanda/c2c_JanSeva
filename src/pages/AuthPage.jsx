import { useState } from 'react';
import { Paper, TextInput, PasswordInput, Button, Title, Text, SegmentedControl, Container } from '@mantine/core';
import classes from './AuthPage.module.css';

export function AuthPage() {
  // 1. State to manage whether we are in 'login' or 'signup' mode
  const [authMode, setAuthMode] = useState('signup');

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius="xl" p="xl">
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
          color="#EE7D62"
        />

        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          // Add these labelProps to align the "Email" text to the left
          labelProps={{ style: { textAlign: 'left', width: '100%' } }}
          radius="md"
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          // Add these labelProps here as well
          labelProps={{ style: { textAlign: 'left', width: '100%' } }}
          radius="md"
        />
        
        {/* We can add another field for 'Confirm Password' if signing up */}
        {authMode === 'signup' && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              required
              mt="md"
              // And here for the conditional field
              labelProps={{ style: { textAlign: 'left', width: '100%' } }}
              radius="md"
            />
        )}

        {/* 3. The button text changes based on the authMode state */}
        <Button fullWidth mt="xl" size="md" radius="xl" color="#EE7D62">
          {authMode === 'signup' ? 'Signup' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
}