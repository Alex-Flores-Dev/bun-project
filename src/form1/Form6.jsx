import ActionButton from '../common/ActionButton';
import BlockNotify from '../common/BlockNotify';

function FormSix() {
    return ( 
        <div className='main'>
            <div className='main-form'>
                <BlockNotify name="Nro de Credito : 156151321" title="Credito Hipotecario" detail="Saldo: 450000 Bs"/>
                <BlockNotify name="Nro de Credito : 152132215" title="Credito Vehicular" detail="Saldo: 70000 USD"/>
                <ActionButton buttonName='Generar plan de pagos' icon="receipt"/>
                <ActionButton buttonName='Pagos Efectudos'/>
            </div>
        </div>
     );
}

export default FormSix;