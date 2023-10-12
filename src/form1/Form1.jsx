import CustomizedList from './Customization';
import BasicCheckbox from './BasicCheckbox';
import InputForm from './InputForm';
import FormButton from './Button';
import './Form1.css'

function FormOne() {
  return (
    <div className='main'>
        <div className='main-form'>
            <InputForm/>
            <BasicCheckbox/>
            <CustomizedList/>
            <InputForm/>
            <InputForm/>
            <InputForm/>
            <InputForm/>
            <InputForm/>
            <FormButton/>
        </div>
    </div>


  );
}

export default FormOne;