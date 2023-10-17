import InputForm from '../common/InputForm';
import ModalForm from '../common/ModalForm';
import { Button,Text,Image } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import ComboBox from '../common/ComboBox';

function FormTwo() {
    const navigate = useNavigate();
    const redirectToGoogle = () => {
        window.open('https://calendly.com/', '_blank').focus();
      };
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Cuota Mensual:" money='1200'/>
                <InputForm name="Tasa de interes%:" money='12'/>
                <InputForm name="Plazo (meses)" money='36'/>
                <ModalForm/>
            </div>
            <div className='main-form'>
                <Text size="ms">Tienes dudas?... Puedes agendar una cita con uno de nuestros asesores de credito</Text>
                <ComboBox title="Departamento" data={['La Paz', 'Cochabamba', 'Santa Cruz']}/>
                <ComboBox title="Agencia" data={['Oficina Nacional', 'Agencia Central', 'Oficina Departamental']}/>
                <Text size="xs" style={{margin:'0px 20px'}}>Tienes alguna duda?...</Text>
                <Button variant="filled" onClick={redirectToGoogle}>Agendar Reunion</Button>
                <Button variant="filled" onClick={()=>navigate('/seguimiento')}>Siguiente Pagina</Button>
                <Image
                    radius="md"
                    h={300}
                    w="auto"
                    fit="contain"
                    src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg'
                />
            </div>
        </div>
     );
}

export default FormTwo;

