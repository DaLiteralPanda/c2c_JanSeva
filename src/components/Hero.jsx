import { Title, Text, TextInput, Container, rem } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export function Hero() {
  return (
    <Container size="md" py="xl" style={{ textAlign: 'center' }}>
      <Title
        order={1}
        sx={(theme) => ({
          fontSize: rem(48),
          fontWeight: 800,
        })}
      >
        Empowering NGOs, Connecting Hearts
      </Title>

      <Text color="dimmed" size="lg" maw={580} mx="auto" mt="xl">
        Discover, connect with, and support verified non-governmental organizations. Your single platform for making a real impact.
      </Text>

      <TextInput
        placeholder="Search NGOs by name or cause..."
        size="lg"
        icon={<IconSearch size={18} stroke={1.5} />}
        radius="xl"
        mt="xl"
        mx="auto"
        maw={580}
      />
    </Container>
  );
}