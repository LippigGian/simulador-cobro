//Handle cuotas
const handlePlazoAcreditacion = (
  value,
  setPlazoAcreditacion,
  comisionesPorAcreditacion,
  setTasaPlazoAcreditacion
) => {
  const fee = comisionesPorAcreditacion[value];
  // console.log("El plazo de acreditacion es: " + fee);
  setTasaPlazoAcreditacion(fee);
  setPlazoAcreditacion(value);
};

export default handlePlazoAcreditacion;
