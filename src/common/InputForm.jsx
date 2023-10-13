import { TextInput } from '@mantine/core';
import classes from './Form1.module.css';

function InputForm(props) {
  return (
    <TextInput
    placeholder={props.name}
    label={props.name}
    mt="xl"
    classNames={classes}
  />
  );
}

export default InputForm;