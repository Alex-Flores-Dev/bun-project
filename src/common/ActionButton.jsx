import { ActionIcon } from '@mantine/core';
import { IconChartHistogram,IconCoin,IconCopy,IconDevicesUp } from '@tabler/icons-react';

export default function ActionButton(props) {
  const element = () =>{
      if(props.icon==="1"){
        return <IconChartHistogram style={{ width: '70%', height: '70%' }} stroke={1.5} />
      }else if(props.icon==="2"){
        return <IconCopy style={{ width: '70%', height: '70%' }} stroke={1.5} />
      }else if(props.icon==="3"){
        return <IconDevicesUp style={{ width: '70%', height: '70%' }} stroke={1.5} />
      }else if(props.icon==="4"){
        return <IconCoin style={{ width: '70%', height: '70%' }} stroke={1.5} />
      }
  }

  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings" style={{margin:'10px',width:'200px',height: '200px', display:'flex',flexDirection:'column'}}>
        {element()}
      <h3 style={{textAlign:'center'}}>{props.buttonName}</h3>
    </ActionIcon>
  );
}