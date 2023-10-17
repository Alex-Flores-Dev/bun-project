import { Timeline, Text } from '@mantine/core';
import { IconGitBranch, IconGitPullRequest, IconGitCommit, IconMessageDots } from '@tabler/icons-react';

export default function TimeLine() {
  return (
    <Timeline active={3} bulletSize={24} lineWidth={3}>
      <Timeline.Item bullet={<IconGitBranch size={12} />} title="Solicitud">
        <Text c="dimmed" size="sm"> <Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualizacion (2 hours ago)2 hours ago)</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="Evaluacion">
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualizacion (52 minutes ago)</Text>
      </Timeline.Item>

      <Timeline.Item title="Aprobacion" bullet={<IconGitPullRequest size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit></Text></Text>
        <Text size="xs" mt={4}>Ultima actualizacion (34 minutes ago)</Text>
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