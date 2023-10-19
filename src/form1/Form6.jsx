import { Notification, Chip, Avatar  } from '@mantine/core';
import BlockNotify from '../common/BlockNotify';
import { useNavigate } from 'react-router-dom';

function FormSix() {
    const navigate = useNavigate();
    return ( 
        <div className='main'>
            <div className='main-form'>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Avatar color="cyan"  size="xl" radius="xl">MK</Avatar>

            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Chip defaultChecked variant="outline" size="xl">Welcome, Alex!</Chip>

            </div>

                <Notification title="Ofertas para ti!">
                    Una tarjeta pensada para ti 🔥
                </Notification>
                <div onClick={()=>navigate('/plan-de-pagos')}>
                <BlockNotify name="Nro de Credito : 156151321" title="Credito Hipotecario" detail="Saldo: 450000 Bs"/>
                </div>
                <div onClick={()=>navigate('/plan-de-pagos')}>
                <BlockNotify name="Nro de Credito : 152132215" title="Credito Vehicular" detail="Saldo: 70000 USD"/>
                </div>
            </div>
        </div>
     );
}

export default FormSix;