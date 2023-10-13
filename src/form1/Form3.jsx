import { Text,Button } from '@mantine/core';
import ComboBox from '../common/ComboBox';

function FormThree() {
    const redirectToGoogle = () => {
        window.open('https://calendly.com/', '_blank').focus();
      };
    return ( 
        <div className='main'>
            <div className='main-form'>
                <Text size="xs">Tienes dudas?... Puedes agendar una cita con uno de nuestros asesores de credito</Text>
                <ComboBox/>
                <ComboBox/>
                <Button variant="filled" onClick={redirectToGoogle}>Agendar Reunion</Button>
            </div>
        </div>
     );
}

export default FormThree;