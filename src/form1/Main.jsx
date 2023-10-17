import CardInfo from "../common/Card";
import { Alert,Notification,Title   } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react'


function Main() {
    const elm = ["UNICASA (Crédito de vivienda)","UNIAUTO (Crédito vehicular)" ,"UNICRÉDITO (Crédito consumo)"]
    const icon = <IconHeart />;

    return ( 
        <>
        <div style={{display:'flex', justifyContent:'center'}}>
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
        </div>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap',justifyContent:'center', width:'80%'}}>
                    {elm.map(element => {return <div style={{width:'400px', margin:'20px'}}><CardInfo name={element}/></div>})}
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'30%'}}>
            <Alert title="Solicita tu credito en linea" icon={icon} withCloseButton={false}>
                    Bancounion.com.bo
            </Alert></div></div>
        </>
     );
}

export default Main;