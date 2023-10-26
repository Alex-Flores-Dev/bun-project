import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

export default function TimeLine() {
  return (
    <Timeline active={3} bulletSize={24} lineWidth={3}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Solicitud">
        <Text c="dimmed" size="sm"> <Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualización (2 hours ago)</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Evaluación">
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualización (52 minutes ago)</Text>
      </Timeline.Item>

      <Timeline.Item title="Aprobación" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualización (34 minutes ago)</Text>
      </Timeline.Item>

      <Timeline.Item title="Firma de Contrato" bullet={<IconMessageDots size={12} lineVariant="dashed"/>}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Pendiente</Text>
      </Timeline.Item>

      <Timeline.Item title="Desembolso" bullet={<IconMessageDots size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Pendiente</Text>
      </Timeline.Item>
    </Timeline>
  );
}