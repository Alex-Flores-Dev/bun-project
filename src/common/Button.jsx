import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

function FormButton(props) {
    const navigate = useNavigate();
    return ( 
        <Button variant="filled" onClick={()=>navigate('/plan-de-pagos')}>{props.name}</Button>
     );
}

export default FormButton;