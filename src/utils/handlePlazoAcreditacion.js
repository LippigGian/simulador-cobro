//Handle cuotas
const handlePlazoAcreditacion = (
  value,
  setPlazoAcreditacion,
  feeAcreditacion,
  setTasaPlazoAcreditacion
) => {
  const fee = feeAcreditacion[value];
  setTasaPlazoAcreditacion(fee);
  setPlazoAcreditacion(value);
};

export default handlePlazoAcreditacion;
