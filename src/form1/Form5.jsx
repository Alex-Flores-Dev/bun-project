import { DateTimePicker } from '@mantine/dates';
import { Textarea } from '@mantine/core';
import CardInfo from '../common/Card';
import InputForm from '../common/InputForm';
import TimeLine from '../common/TimeLine'

function FormFive() {
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Fecha de Inicio:" money='18/10/2023'/>
                <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />
                <TimeLine/>
                <Textarea
                    label="Buzon de Mensajes "
                    description="(Opcional en caso de dudas)"
                    placeholder="Escribenos..."
                />
                <CardInfo/>
            </div>
        </div>
     );
}

export default FormFive;