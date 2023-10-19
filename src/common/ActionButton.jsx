import { ActionIcon } from '@mantine/core';
import { IconCoin,IconReceipt2 } from '@tabler/icons-react';

export default function ActionButton(props) {
  return (
    <ActionIcon variant="filled" size="xl" aria-label="Settings" style={{margin:'10px',width:'200px',height: '200px', display:'flex',flexDirection:'column'}}>
        {props.icon==='receipt'?<IconReceipt2 style={{ width: '70%', height: '70%' }} stroke={1.5} />:<IconCoin style={{ width: '70%', height: '70%' }} stroke={1.5} />}
      <h3 style={{textAlign:'center'}}>{props.buttonName}</h3>
    </ActionIcon>
  );
}