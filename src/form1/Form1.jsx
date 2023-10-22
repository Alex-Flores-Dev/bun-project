import ComboBox from '../common/ComboBox';
import BasicCheckbox from '../common/BasicCheckbox';
import InputForm from '../common/InputForm';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mantine/core';
import './Form1.css'
import CardInfo from "../common/Card";
import One from '../common/static/1.jpeg'
import Two from '../common/static/2.jpeg'
import Three from '../common/static/3.jpeg'

function FormOne() {
  const navigate = useNavigate();
  const functi = (value) =>{
    console.log(value)
  }
  const elm = [
    {prod:"UNICASA (Crédito de vivienda)", image:Two, 
    detail:"Crédito destinado para la compra de vivienda, departamento y terreno para mejoramiento, refacción, remodelación, ampliación de una vivienda Unifamiliar de Interés Social sin fines comerciales." },{
    prod:"UNIAUTO (Crédito vehicular)", image:Three, detail:"Crédito destinado a la compra o adquisición de vehículos nuevos o usados con garantía prendaria del vehículo, los cuales cuentan con póliza contra todo riesgo."},
    {prod:"UNICRÉDITO (Crédito consumo)", image:One, detail:"Crédito destinado a la libre disponibilidad para satisfacer tus necesidades inmediatas como viajes, compras, estudios, salud, etc."}]
  return (
    <div className='main-order'>
      <div className='main-side side-one'>
          <div className='main-form'>
              <InputForm name="Nombres y Apellidos:"/>
              <ComboBox data={['UNICASA (Crédito de vivienda)', 'UNIAUTO (Crédito vehicular)', 'UNICRÉDITO (Crédito consumo)']} funct={functi} title='Seleccione su Producto'/>
              <BasicCheckbox/>
              <InputForm name="Ingresos Mensuales [Bs]:"/>
              <InputForm name="Otros Créditos [Cuota Mensual Bs]:"/>
              <InputForm name="Precio de lo que Quiere Comprar [Bs]:"/>
              <InputForm name="Monto a Solicitar [Bs]:"/>
              <Button variant="filled" onClick={()=>navigate('/pagos')}>Siguiente</Button>
          </div>
      </div>
        <div className='side-two' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'center', width:'80%'}}>
                    {elm.map(element => {return <div style={{width:'400px', margin:'20px'}}><CardInfo name={element.prod} image={element.image} detail={element.detail}/></div>})}
                </div>
        </div>
    </div>


  );
}

export default FormOne;