import { DateTimePicker } from '@mantine/dates';
import ListOfResults from '../common/ListOfResults';
import { Textarea } from '@mantine/core';
import CardInfo from '../common/Card';
import InputForm from '../common/InputForm';

function FormFive() {
    return ( 
        <div className='main'>
            <div className='main-form'>
                <InputForm name="Fecha de Inicio:"/>
                <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />
                <ListOfResults/>
                <Textarea
                    label="Input label"
                    description="Input description"
                    placeholder="Input placeholder"
                />
                <CardInfo/>
            </div>
        </div>
     );
}

export default FormFive;