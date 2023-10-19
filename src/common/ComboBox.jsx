import { Select } from '@mantine/core';

export default function ComboBox(props) {
  return (
    <Select
      label={props.title}
      placeholder="Seleccione"
      data={props.data}
      onChange={(value)=>props.funct(value)}
    />
  );
}