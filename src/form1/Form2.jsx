import InputForm from '../common/InputForm';
import ModalForm from '../common/ModalForm';

function FormTwo() {
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Cuota Mensual:"/>
                <InputForm name="Tasa de interes%:"/>
                <InputForm name="Plazo (meses)"/>
                <ModalForm/>
            </div>
        </div>
     );
}

export default FormTwo;