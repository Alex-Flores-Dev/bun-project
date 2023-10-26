import { Chip, Avatar,Image  } from '@mantine/core';
import InputForm from '../common/InputForm';
import ActionButton from '../common/ActionButton';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import TableForm from '../common/TableForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import qr from '../common/static/qr.jpeg'
import TableHistoric from '../common/TableHistoric';
import person from '../common/static/person1.jpeg'

function FormSeven() {
    const [opened, { open, close }] = useDisclosure(false);
    const [name, setName] = useState()
    const navigate = useNavigate();
    
    return ( 
        <div className='main' style={{justifyContent:'center'}}>
            <div className='x-main-form'>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Avatar color="cyan" src={person}  size="xl" radius="xl"/>
                </div>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Chip defaultChecked variant="outline" size="xl">Bienvenido Alex!</Chip>

                </div>
                <InputForm name="Monto Desembolsado [Bs]:" money='45000'/>
                <InputForm name="Nro. De cuotas pagadas:" money='15'/>
                <InputForm name="Nro. De cuotas por pagar:" money='20'/>
                <InputForm name="Saldo Adeudado [Bs]:" money='20000'/>
                <InputForm name="Fecha de la Próxima Cuota:" money='11/10/2023'/>
            </div>
            <div style={{display:'flex', flexDirection:'row'}}>
                {/* <div onClick={()=>{open();setName('Plan de Pagos');}}> */}
                {/* <div onClick={()=>navigate('/amortizacion')}> */}
                <div onClick={()=>{open();setName('Plan de Pagos');}}> 
                    <ActionButton buttonName='Generar plan de pagos' icon="1"/>
                </div>
                <div onClick={()=>{open();setName('historico')}}>
                <ActionButton buttonName='Pagos efectuados(Historico)' icon="2"/>
                </div>
                <div onClick={()=>navigate('/amortizacion')}>
                <ActionButton buttonName='Simulador de pagos adelantados' icon="3"/>
                </div>
                <div onClick={()=>{open();setName('Realizar pago de la cuota mensual por QR');}}>
                <ActionButton buttonName='Realizar pago de la cuota mensual por QR' icon="4"/>
                </div>
            </div>
            {name==="historico"?            
                    <Modal opened={opened} onClose={close} title={name} centered size="xm">
                        {name==='Realizar pago de la cuota mensual por QR'?    <Image
                            radius="md"
                            h={400}
                            w="auto"
                            fit="contain"
                            src={qr}
                            />:<TableHistoric/>}
                    </Modal>:
                        <Modal opened={opened} onClose={close} title={name} centered size="xm">
                        {name==='Realizar pago de la cuota mensual por QR'?    <Image
                            radius="md"
                            h={400}
                            w="auto"
                            fit="contain"
                            src={qr}
                            />:<TableForm/>}
                    </Modal>}
            </div>
     );
}

export default FormSeven;