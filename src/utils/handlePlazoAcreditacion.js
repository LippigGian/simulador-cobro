//Handle cuotas
const handlePlazoAcreditacion = (
  value,
  setPlazoAcreditacion,
  comisionesPorAcreditacion,
  setTasaPlazoAcreditacion
) => {
  const fee = comisionesPorAcreditacion[value];
  setTasaPlazoAcreditacion(fee);
  setPlazoAcreditacion(value);
};

export default handlePlazoAcreditacion;
