import ComboBox from '../common/ComboBox';
import BasicCheckbox from '../common/BasicCheckbox';
import InputForm from '../common/InputForm';
import FormButton from '../common/Button';
import './Form1.css'

function FormOne() {
  return (
    <div className='main'>
        <div className='main-form'>
            <InputForm name="Nombres y Apellidos:"/>
            <ComboBox data={['UNICASA (Crédito de vivienda)', 'UNIAUTO (Crédito vehicular)', 'UNICRÉDITO (Crédito consumo)']} title='Seleccione su Producto'/>
            <BasicCheckbox/>
            <InputForm name="Ingresos Mensuales [Bs]:"/>
            <InputForm name="Otros Créditos [Cuota Mensual Bs]:"/>
            <InputForm name="Precio de lo que Quiere Comprar [Bs]:"/>
            <InputForm name="Monto a Solicitar [Bs]:"/>
            <FormButton name="Siguiente"/>
        </div>
    </div>


  );
}

export default FormOne;