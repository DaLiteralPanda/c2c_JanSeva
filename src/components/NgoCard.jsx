import { Card, Image, Text, Title, Badge } from '@mantine/core';
import classes from './NgoCard.module.css';

// The new component structure
export function NgoCard({ image, name, description, location, category}) {
  return (
    <Card p="lg" radius="xl" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image src={image} height={250} alt={name} radius="lg" />
      </Card.Section>

      <Badge color="#6d381fff" variant="light" mt="xl" className={classes.badge}>
        {category}
      </Badge>

      <Title order={1} className={classes.title} mt="md">
        {name}
      </Title>

      <Text className={classes.description}>
        {description}
      </Text>

      <Text className={classes.description}>
        Located in {location}
      </Text>
    </Card>
  );
}