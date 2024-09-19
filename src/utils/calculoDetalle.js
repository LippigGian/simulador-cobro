// calculoTotal.js
const calculoDetalle = (
  monto,
  comisionesMedioPago,
  medioPago,
  setComision,
  setTasaComision
  // typePayment,
  // methodPayment,
  // feePayment,
  // setTasa,
  // tasaCuotas,
  // setComision,
  // setFinalAmount,
  // plazoAcreditacion,
  // feeAcreditacion,
  // setPlazoAcreditacion,
  // setTasaPlazoAcreditacion,
  // cuotas,
  // formatearNumeros,
  // tipoPago
) => {
  const comisionFee = comisionesMedioPago[medioPago] || 0;
  const comisionesFeeFixed = (comisionFee*100).toFixed(2);
  setTasaComision(comisionesFeeFixed);
  // console.log("comisiones medio de pago es: "+comisionesMedioPago[medioPago])
  // console.log("medio de pago" + medioPago)



  // // Crear una clave para acceder a feePayment
  // const key = `${methodPayment}-${typePayment}`;
  // // Obtener la comisión basada en la combinación de methodPayment y typePayment
  // const fee = feePayment[key] || 0; // Si la combinación no está en feePayment, usar 0

  // Comision por plazo de acreditacion
  // const keyAcreditacion = feeAcreditacion[plazoAcreditacion];
  // setTasaPlazoAcreditacion(keyAcreditacion);
  // let nuevaComision = 0;
  // let feeAmount = 0;

  console.log(medioPago)
  // Calculo comision dependiendo plazo acreditacion (tarjeta de crédito)
   if (medioPago == 3) {
    console.log("efectivamente, es tarjeta de credito pa")

    }
  //   setTasa((keyAcreditacion * 100).toFixed(2));
  //   nuevaComision = (keyAcreditacion * 100).toFixed(2);
  //   feeAmount = amount * keyAcreditacion;
  // } else {
  //   nuevaComision = (fee * 100).toFixed(2);
  //   feeAmount = amount * fee;
  // }
  // setTasa(nuevaComision);

  // setComision(formatearNumeros(feeAmount));

  if (!monto) return 0;
  //Calculo para comisión
  const comision = ((monto*comisionFee)*1.21).toFixed(2);
  setComision(comision)

  const totalARecibir= monto - comision;
  return totalARecibir;

  // let totalAmount = 0;
  // const tasa = tasaCuotas / 100;
  // totalAmount = parseFloat(amount) - feeAmount;
  // const finalAmountFormateado = formatearNumeros(amount * tasa + amount);
  // setFinalAmount(finalAmountFormateado);
  // const totalAmountFormateado = formatearNumeros(totalAmount);
  // return totalAmountFormateado;
};

export default calculoDetalle;
