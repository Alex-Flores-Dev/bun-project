import { TextInput } from '@mantine/core';

function InputForm(props) {
  return (
    <TextInput
    placeholder={props.name}
    label={props.name}
    mt="xl"
    value={props.money}
    pointer='false'
  />
  );
}

export default InputForm;