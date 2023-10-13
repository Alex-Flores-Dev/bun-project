import { Select } from '@mantine/core';

export default function ComboBox() {
  return (
    <Select
      label="Tipo de Credito"
      placeholder="Seleccione"
      data={['Producto A', 'Producto B', 'Producto C', 'Producto D']}
    />
  );
}