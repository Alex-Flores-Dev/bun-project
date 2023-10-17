import InputForm from '../common/InputForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';

function FormFour() {
    const navigate = useNavigate();
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Nro de CI, Complemento, Cuidad:"/>
                <InputForm name="Nro de Operacion:"/>
                <Button variant="filled" onClick={()=>navigate('/seguimiento-cliente')}>Buscar</Button>
            </div>
        </div>
     );
}

export default FormFour;