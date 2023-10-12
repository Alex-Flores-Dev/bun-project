import { TextInput } from '@mantine/core';
import classes from './Form1.module.css';

function InputForm() {
  return (
    <TextInput
    placeholder="TextInput component"
    label="TextInput component"
    mt="md"
    classNames={classes}
  />
  );
}

export default InputForm;