// calculoTotal.js
const calculoDetalle = (
  amount,
  typePayment,
  methodPayment,
  feePayment,
  setTasa,
  tasaCuotas,
  setComision,
  setFinalAmount,
  plazoAcreditacion,
  feeAcreditacion,
  setPlazoAcreditacion,
  setTasaPlazoAcreditacion,
  cuotas,
  formatearNumeros,
  tipoPago
) => {
  // Crear una clave para acceder a feePayment
  const key = `${methodPayment}-${typePayment}`;
  // Obtener la comisión basada en la combinación de methodPayment y typePayment
  const fee = feePayment[key] || 0; // Si la combinación no está en feePayment, usar 0

  //Comision por plazo de acreditacion
  const keyAcreditacion = feeAcreditacion[plazoAcreditacion];
  setTasaPlazoAcreditacion(keyAcreditacion);
  let nuevaComision = 0;
  let feeAmount = 0;

  // Calculo comision dependiendo plazo acreditacion
  if (tipoPago === "Tarjeta de crédito") {
    setTasa((keyAcreditacion * 100).toFixed(2));
    nuevaComision = (keyAcreditacion * 100).toFixed(2);
    feeAmount = amount * keyAcreditacion;
  } else {
    nuevaComision = (fee * 100).toFixed(2);
    feeAmount = amount * fee;
  }
  setTasa(nuevaComision);

  setComision(formatearNumeros(feeAmount));

  if (!amount) return 0;

  let totalAmount = 0;
  const tasa = tasaCuotas / 100;
  totalAmount = parseFloat(amount) - feeAmount;
  const finalAmountFormateado = formatearNumeros(amount * tasa + amount);
  setFinalAmount(finalAmountFormateado);
  const totalAmountFormateado = formatearNumeros(totalAmount);
  return totalAmountFormateado;
};

export default calculoDetalle;
