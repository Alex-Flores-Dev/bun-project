import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import TableForm from './TableForm';

export default function ModalForm() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Plan de pagos" centered size="xl">
        <TableForm/>
      </Modal>

      <Button onClick={open}>Plan de pagos</Button>
    </>
  );
}