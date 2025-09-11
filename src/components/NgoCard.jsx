import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { Link } from 'react-router-dom'; // <-- 1. IMPORT LINK

// 2. ACCEPT THE 'id' PROP
export function NgoCard({ id, image, name, description, category }) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      {/* ... Card.Section and Group are the same ... */}
      <Card.Section>
        <Image src={image} height={160} alt={name} />
      </Card.Section>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="green" variant="light">{category}</Badge>
      </Group>
      <Text size="sm" color="dimmed">{description}</Text>

      {/* 3. WRAP THE BUTTON WITH THE LINK */}
      <Link to={`/ngo/${id}`} style={{ textDecoration: 'none' }}>
        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Learn More
        </Button>
      </Link>
    </Card>
  );
}