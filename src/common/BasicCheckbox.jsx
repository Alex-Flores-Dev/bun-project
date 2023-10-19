import { Checkbox, Group } from '@mantine/core';

export default function BasicCheckbox() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      label="Trabajo Dependiente"
      description="Es usted dependiente?"
    >
      <Group mt="xs">
        <Checkbox value="Si" label="Si" />
        <Checkbox value="No" label="No" />
      </Group>
    </Checkbox.Group>
  );
}