import { Textarea, Button } from '@mantine/core';
import InputForm from '../common/InputForm';
import TimeLine from '../common/TimeLine'
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Dialog, Text } from '@mantine/core';

function FormFive() {
    const navigate = useNavigate();
    const [opened, { toggle, close }] = useDisclosure(false);
    
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Fecha de Inicio:" money='18/10/2023'/>
                <TimeLine/>
                <Textarea
                    label="Buzon de Mensajes "
                    description="(Opcional en caso de dudas)"
                    placeholder="Escribenos..."
                />
                <Button variant="filled" onClick={toggle} >Enviar Mensaje</Button>
                <Button variant="filled" onClick={()=>navigate('/revisar-solicitudes')}>Mis Solicitudes</Button>
            </div>
                <Dialog opened={opened} withCloseButton onClose={close} size="lg" radius="md">
                    <Text size="sm" mb="xs" fw={500}>
                    Se ha enviado el Mensaje!
                    </Text>
                </Dialog>
        </div>
        
     );
}

export default FormFive;