import { TextInput } from '@mantine/core';

function InputForm(props) {
  return (
    <TextInput
    placeholder={props.name}
    label={props.name}
    mt={props.mt}
    value={props.money}
    pointer='false'
  />
  );
}

export default InputForm;