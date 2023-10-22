import CardInfo from "../common/Card";
import { Alert  } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react'
import One from '../common/static/1.jpeg'
import Two from '../common/static/2.jpeg'
import Three from '../common/static/3.jpeg'

function Main() {
    const elm = [
        {prod:"UNICASA (Crédito de vivienda)", image:Two, 
        detail:"Crédito destinado para la compra de vivienda, departamento y terreno para mejoramiento, refacción, remodelación, ampliación de una vivienda Unifamiliar de Interés Social sin fines comerciales." },{
        prod:"UNIAUTO (Crédito vehicular)", image:Three, detail:"Crédito destinado a la compra o adquisición de vehículos nuevos o usados con garantía prendaria del vehículo, los cuales cuentan con póliza contra todo riesgo."},
        {prod:"UNICRÉDITO (Crédito consumo)", image:One, detail:"Crédito destinado a la libre disponibilidad para satisfacer tus necesidades inmediatas como viajes, compras, estudios, salud, etc."}]
    const icon = <IconHeart />;

    return ( 
        <>
        {/* <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'30%'}}>
                <Title 
                    order={1}
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    >
                        Solicita tu credito ahora!
                </Title >
                <Notification title="Selecciona un credito" withCloseButton={false} >
                    Evalua lo que necesitas y seleccionalo, nosotro te ayudaremos
                </Notification>
            </div>
        </div> */}

            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'center', width:'80%'}}>
                    {elm.map(element => {return <div style={{width:'400px', margin:'20px'}}><CardInfo name={element.prod} image={element.image} detail={element.detail}/></div>})}
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <div style={{width:'30%'}}>
                    <Alert title="Solicita tu credito en linea" icon={icon} withCloseButton={false}>
                            Bancounion.com.bo
                    </Alert>
                </div>
            </div>
        </>
     );
}

export default Main;