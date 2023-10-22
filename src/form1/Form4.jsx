import InputForm from '../common/InputForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import ComboBox from '../common/ComboBox';
import FormFive from './Form5';
function FormFour() {
    const navigate = useNavigate();
    return (
    <div className='main-order'>
        <div className='main-side side-one'>
            <div className='u-main-form'>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <div style={{width:'60%'}}>
                        <InputForm name="Nro de CI"/>
                    </div>
                    <div style={{width:'20%'}}>
                        <InputForm name="Complemento"/>
                    </div>
                    <div style={{width:'20%'}}>
                    <ComboBox data={['LPZ', 'SCZ', 'CBA', 'SCR', 'BEN', 'TJA', 'PND', 'PTS']} title='Departamento'/>
                    </div>
                </div>
                <InputForm name="Nro de Operación:"/>
                <Button variant="filled" onClick={()=>navigate('/seguimiento-cliente')}>Buscar</Button>
            </div>
        </div>
        <div className='side-right'>
            <FormFive/>
        </div>
        
    </div> 
     );
}

export default FormFour;