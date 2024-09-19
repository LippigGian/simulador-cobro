import { NumericFormat } from 'react-number-format';
import { Input } from "@/components/ui/input";

const MontoInput = ({ label, monto, onChange, className }) => (
  <div className={className}>
    <label >{label}</label>
    <NumericFormat
      value={monto === 0 ? '' : monto} // Si amount es 0, muestra el placeholder
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale={true}
      onValueChange={(values) => {
        const { floatValue } = values;
        onChange({ target: { value: floatValue ?? 0 } }); // Si floatValue es undefined, establece amount a 0
      }}
      customInput={Input}
      placeholder="Ingresá el monto" // Placeholder visible cuando amount es 0
      className=""
      prefix={monto !== 0 ? " $ " : ""} // Oculta el prefijo si amount es 0
    />
  </div>
);

export default MontoInput;
