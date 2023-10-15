import { Blockquote } from '@mantine/core';
import { IconVip } from '@tabler/icons-react';

export default function BlockNotify(props) {
  const icon = <IconVip />;
  return (
    <Blockquote color="blue" cite={props.name} icon={icon} mt="xl">
      <h3>{props.title}</h3>
      {props.detail}
    </Blockquote>
  );
}