import ComboBox from '../common/ComboBox';
import BasicCheckbox from '../common/BasicCheckbox';
import InputForm from '../common/InputForm';
import FormButton from '../common/Button';
import './Form1.css'

function FormOne() {
  return (
    <div className='main'>
        <div className='main-form'>
            <InputForm name="Nombre y Apellido:"/>
            <ComboBox data={['UNICASA (Crédito de vivienda)', 'UNIAUTO (Crédito vehicular)', 'UNICRÉDITO (Crédito consumo)']}/>
            <BasicCheckbox/>
            <InputForm name="Ingresos Mensuales [Bs]:"/>
            <InputForm name="Otros Creditos [Cuota Mensual Bs]:"/>
            <InputForm name="Precio de lo que se quiere comprar [Bs]:"/>
            <InputForm name="Monto a solicitar [Bs]:"/>
            <FormButton name="Siguiente"/>
        </div>
    </div>


  );
}

export default FormOne;