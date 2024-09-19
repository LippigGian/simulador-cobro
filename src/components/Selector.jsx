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

export default function Selector({
  options,
  label,
  onChange,
  value, // Valor actual seleccionado
  leyendaSelector,
}) {
  return (

<div className="selectContainer">
      {label && <label>{label}</label>}
      
      <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={value ? "select-trigger text-black" : "select-trigger text-gray-600"}>

    <SelectValue
      placeholder="Selecciona una opción"
      className="placeholder-custom" // Aplica la clase CSS personalizada
    >
{value
  ? options.find((option) => option.value === value)?.label
  : "Seleccioná el " + label.charAt(0).toLowerCase() + label.slice(1)}
    </SelectValue>
  </SelectTrigger>
  <SelectContent className="select-content">
    <SelectGroup>
      <SelectLabel>{label}</SelectLabel>
      {options.map((option) => (
        <SelectItem
          key={option.value}
          value={option.value}
          disabled={option.disable}
          className={value === option.value ? "selected-option" : ""}
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
