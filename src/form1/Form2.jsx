import InputForm from '../common/InputForm';
import ModalForm from '../common/ModalForm';
import { Button,Text,Image, Modal } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import ComboBox from '../common/ComboBox';
import agenda from '../common/static/agenda.jpeg'
import { useDisclosure } from '@mantine/hooks';

function FormTwo() {
    const navigate = useNavigate();
    const [opened, { open, close }] = useDisclosure(false);
    return ( 
        <div>
            <div className='main-order'>
                <div className='side-left side-two'>
                    <div className='main-form'>
                        <InputForm name="Cuota Mensual [Bs]:" money='1200'/>
                        <InputForm name="Tasa de interes%:" money='12'/>
                        <InputForm name="Plazo (meses)" money='36'/>
                        <ModalForm/>
                    </div>
                </div>
                <div  className='side-right'>
                    <div className='main-form side-one'>
                        <Text size="ms">Tienes dudas?... Puedes agendar una cita con uno de nuestros asesores de credito</Text>
                        <ComboBox title="Departamento" data={['La Paz', 'Cochabamba', 'Santa Cruz']}/>
                        <ComboBox title="Agencia" data={['Agencia San Miguel', 'Agencia Camacho', 'Agencia 6 de Marzo']}/>
                        <Text size="xs" style={{margin:'0px 20px'}}>Tienes alguna duda?...</Text>
                        <Button variant="filled" onClick={open}>Agendar Reunion</Button>
                        <Button variant="filled" onClick={()=>navigate('/seguimiento')}>Siguiente Pagina</Button>
                    </div>

                    <Modal opened={opened} onClose={close} title="Agendar Reunion"  centered size="70%" >
                    <Image
                        radius="md"
                        h={600}
                        src={agenda}
                    />
                    </Modal>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent:'center'}}>
                    <Image
                        radius="md"
                        h={400}
                        w="auto"
                        fit="contain"
                        src='https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg'
                    />
            </div>
        </div>
     );
}

export default FormTwo;

