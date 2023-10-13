import ComboBox from '../common/ComboBox';
import BasicCheckbox from '../common/BasicCheckbox';
import InputForm from '../common/InputForm';
import FormButton from '../common/Button';
import './Form1.css'

function FormOne() {
  return (
    <div className='main'>
        <div className='main-form'>
            <InputForm name="Nombre:"/>
            <ComboBox/>
            <BasicCheckbox/>
            <InputForm name="Ingresos Mensuales:"/>
            <InputForm name="Otros Creditos [Cuota Mensual]:"/>
            <InputForm name="Precio de lo que se quiere comprar:"/>
            <InputForm name="Monto a solicitar:"/>
            <FormButton name="Siguiente"/>
        </div>
    </div>


  );
}

export default FormOne;