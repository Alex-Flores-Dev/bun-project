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
                        <ComboBox title="Agencia" data={['Oficina Nacional', 'Agencia Central', 'Oficina Departamental']}/>
                        <Text size="xs" style={{margin:'0px 20px'}}>Tienes alguna duda?...</Text>
                        <Button variant="filled" onClick={redirectToGoogle}>Agendar Reunion</Button>
                        <Button variant="filled" onClick={()=>navigate('/seguimiento')}>Siguiente Pagina</Button>
                    </div>

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

