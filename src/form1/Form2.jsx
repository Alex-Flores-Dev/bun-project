import InputForm from '../common/InputForm';
import ModalForm from '../common/ModalForm';
import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function FormTwo() {
    const navigate = useNavigate();
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Cuota Mensual:"/>
                <InputForm name="Tasa de interes%:"/>
                <InputForm name="Plazo (meses)"/>
                <ModalForm/>
                <Button variant="filled" onClick={()=>navigate('/agendar-reunion')}>Agendar Reunion</Button>
            </div>
        </div>
     );
}

export default FormTwo;