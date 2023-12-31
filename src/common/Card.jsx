import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

export default function CardInfo(props) {
  const navigate = useNavigate();
  return (
    <Card shadow="xs" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={props.image}
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

      <Text size="xs" c="dimmed">
        {props.detail}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={()=>navigate('/solicitud')}>
          Saber mas...
      </Button>
    </Card>
  );
}

