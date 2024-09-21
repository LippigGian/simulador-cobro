import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectLabel,
} from "@/components/ui/select";

// Componente Selector
export default function Selector({
  label,      // Etiqueta para el select
  name,       // Nombre del input
  options,    // Opciones que vienen en el array tipoOpcionesMedioPago
  onChange,   // Función a ejecutar al cambiar la opción seleccionada
  valorInicial
}) {
  const [selectedValue, setSelectedValue] = React.useState(valorInicial || ""); // Estado para la opción seleccionada

  // Manejar el cambio de valor en el select
  const handleSelectChange = (value) => {
    setSelectedValue(value);  // Actualiza el estado local
    onChange(value);          // Llama a la función onChange pasada como prop
  };

  return (
    <div className="selectContainer mt-[15px] mb-[15px]">
      {/* Etiqueta */}
      {label && <label htmlFor={name}>{label}</label>}

      {/* Componente Select */}
      <Select value={selectedValue} onValueChange={handleSelectChange}>
        <SelectTrigger className={selectedValue ? "text-black" : "text-gray-600"}>
          {/* Valor seleccionado o placeholder */}
          <SelectValue placeholder="Seleccioná el medio de pago">
            {selectedValue
              ? options.find((option) => option.value === selectedValue)?.label
              : "Seleccioná el medio de pago"}
          </SelectValue>
        </SelectTrigger>

        {/* Contenido del Select con las opciones */}
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                value={option.value}
                className={selectedValue === option.value ? "selected-option" : ""}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
