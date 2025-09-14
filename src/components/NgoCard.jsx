import { Card, Image, Text, Badge, Title } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './NgoCard.module.css';

function NgoCard({ id, name, image, category, description, location }) {
  if (!id) {
    return null;
  }

  return (
    // Use .cardLink to remove the underline and make the whole card clickable
    <Link to={`/ngo/${id}`} className={classes.cardLink}>
      {/* The main card uses the .card class for flexbox and background styles */}
      <Card withBorder radius="xl" p="md" className={classes.card}>
        {/* The image section gets its drop-shadow style */}
        <Card.Section className={classes.imageSection}>
          <Image src={image} alt={name} height={180} />
        </Card.Section>

        {/* Each element below is now linked to its specific style from the CSS file */}
        <Badge mt="md" size="lg" variant="filled" color="rgba(0, 0, 0, 0.3)" className={classes.badge}>
          {category}
        </Badge>

        <Title order={3} mt="sm" className={classes.title}>
          {name}
        </Title>

        <Text size="sm" mt="xs" className={classes.description}>
          {description}
        </Text>

        <Text size="sm" mt="md" c="white">
          Located in {location}
        </Text>
      </Card>
    </Link>
  );
}

export default NgoCard;