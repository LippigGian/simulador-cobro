import { NumericFormat } from 'react-number-format';

const MontoInput = ({ label, amount, onChange, className }) => (
  <div className={className}>
    <label className="titulo">{label}</label>
    <NumericFormat
      value={amount}
      thousandSeparator="."
      decimalSeparator=","
      decimalScale={2}
      fixedDecimalScale={true}
      onValueChange={(values) => {
        const { floatValue } = values;
        onChange({ target: { value: floatValue } });  // Ajustar para que funcione con onChange
      }}
      className="input rounded-md border-b border-gray-300 px-3 py-2 text-sm w-auto titulo_input" 
      prefix=" $ "/>
  </div>
);

export default MontoInput;
