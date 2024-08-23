import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
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
        <SelectTrigger className="select-trigger">
          <SelectValue placeholder="Seleccione una opción" />
        </SelectTrigger>
        <SelectContent className="select-content">
          <SelectGroup>
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
      <p className="leyenda">{leyendaSelector}</p>
    </div>
  );
}
