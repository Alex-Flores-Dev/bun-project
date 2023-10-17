import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function CardInfo(props) {
  const navigate = useNavigate();
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{props.name}</Text>
        <Badge color="pink" variant="light">
          mas
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={()=>navigate('/solicitud')}>
          Saber mas...
      </Button>
    </Card>
  );
}
