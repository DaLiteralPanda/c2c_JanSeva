import { useState } from 'react';
import { Paper, TextInput, PasswordInput, Button, Title, Text, SegmentedControl, Container } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import classes from './AuthPage.module.css';

export function AuthPage() {
  // 1. State to manage whether we are in 'login' or 'signup' mode
  const [authMode, setAuthMode] = useState('signup');
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: (values) => {
      if (authMode === 'signup') {
        if (values.password !== values.confirmPassword) {
          return { confirmPassword: 'Passwords do not match' };
        }
      }
      return {};
    },
  });

  const handleSubmit = async (values) => {
    if (authMode === 'signup') {
      // --- SIGNUP LOGIC ---
      const { error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
      });

      if (error) {
        notifications.show({ title: 'Error', message: error.message, color: 'red' });
      } else {
        notifications.show({ title: 'Success!', message: 'Please check your email to confirm your account.', color: 'green' });
        // Optional: switch to login mode after successful signup
        setAuthMode('login');
        form.reset();
      }
    } else {
      // --- LOGIN LOGIC ---
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) {
        notifications.show({ title: 'Error', message: error.message, color: 'red' });
      } else {
        notifications.show({ title: 'Success!', message: 'Welcome back!', color: 'green' });
        navigate('/'); // Redirect to homepage on successful login
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      {/* Change Paper to a form element and add onSubmit */}
      <Paper component="form" onSubmit={form.onSubmit(handleSubmit)} className={classes.form} radius="xl" p="xl">
        <SegmentedControl
          fullWidth
          size="md"
          radius="xl"
          value={authMode}
          onChange={setAuthMode}
          data={[{ label: 'Login', value: 'login' }, { label: 'Signup', value: 'signup' }]}
          mb="xl"
          color="#EE7D62"
        />

        <TextInput
          label="Email"
          placeholder="your@email.com"
          required
          labelProps={{ style: { textAlign: 'left', width: '100%' } }}
          radius="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          labelProps={{ style: { textAlign: 'left', width: '100%' } }}
          radius="md"
          {...form.getInputProps('password')}
        />
        
        {authMode === 'signup' && (
            <PasswordInput
              label="Confirm Password"
              placeholder="Confirm password"
              required
              mt="md"
              labelProps={{ style: { textAlign: 'left', width: '100%' } }}
              radius="md"
              {...form.getInputProps('confirmPassword')}
            />
        )}

        {/* Change button type to "submit" */}
        <Button type="submit" fullWidth mt="xl" size="md" radius="xl" color="#EE7D62">
          {authMode === 'signup' ? 'Signup' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
}