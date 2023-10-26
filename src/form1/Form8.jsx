import { Chip, Avatar  } from '@mantine/core';
import InputForm from '../common/InputForm';
import TableForm from '../common/TableForm';
import { useState } from 'react';
import ComboBox from '../common/ComboBox';
import person from '../common/static/person1.jpeg'

function FormEight() {
    const [change,setChange] = useState('');
    const funcChange = (data) => {
        setChange(data);
        console.log(data)
    }

    return ( 
        <div className='main'>
            <div className='main-form'>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Avatar color="cyan" src={person}  size="xl" radius="xl"/>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <Chip defaultChecked variant="outline" size="xl">Bienvenido Alex!</Chip>

            </div>
            <div>
            <InputForm name="Cuánto quieres amortizar? [Bs]:"/>
            <ComboBox data={['Reducción del Plazo', 'Reducción de la Cuota']} title='Tipo de Beneficio' funct={funcChange}/>
            </div>
            {change?<div>
                <h3>Nuevo Plan con {change}</h3>
                <TableForm/>
            </div>:null
            }
        </div>
        </div>
     );
}

export default FormEight;