import { Text,Button } from '@mantine/core';
import ComboBox from '../common/ComboBox';
import { useNavigate } from 'react-router-dom';

function FormThree() {
    const redirectToGoogle = () => {
        window.open('https://calendly.com/', '_blank').focus();
      };
      const navigate = useNavigate();
    return ( 
        <div className='main'>
            <div className='main-form'>
                <Text size="xs">Tienes dudas?... Puedes agendar una cita con uno de nuestros asesores de credito</Text>
                <ComboBox/>
                <ComboBox/>
                <Button variant="filled" onClick={redirectToGoogle}>Agendar Reunion</Button>
                <Button variant="filled" onClick={()=>navigate('/seguimiento')}>Siguiente Pagina</Button>
            </div>
        </div>
     );
}

export default FormThree;