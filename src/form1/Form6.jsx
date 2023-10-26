import { Notification, Chip, Avatar  } from '@mantine/core';
import BlockNotify from '../common/BlockNotify';
import { useNavigate } from 'react-router-dom';
import person from '../common/static/person1.jpeg'

function FormSix() {
    const navigate = useNavigate();
    return ( 
        <div className='main'>
            <div className='main-form'>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Avatar color="cyan" src={person} size="xl" radius="xl"/>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Chip defaultChecked variant="outline" size="xl">Bienvenido Alex!</Chip>

            </div>

                <Notification title="Ofertas para ti!">
                    Una tarjeta pensada para ti 🔥
                </Notification>
                <div onClick={()=>navigate('/plan-de-pagos')}>
                <BlockNotify name="Nro de Crédito : 156151321" title="Crédito Hipotecario" detail="Saldo: 450000 Bs"/>
                </div>
                <div onClick={()=>navigate('/plan-de-pagos')}>
                <BlockNotify name="Nro de Crédito : 152132215" title="Crédito Vehicular" detail="Saldo: 70000 Bs"/>
                </div>
            </div>
        </div>
     );
}

export default FormSix;