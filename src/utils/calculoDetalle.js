// calculoTotal.js
const calculoDetalle = (
  monto,
  comisionesMedioPago,
  medioPago,
  setComision,
  setTasaComision,
  tasaPagoCuotas,
  setMontoPagoCuotas,
  plazoAcreditacion,
  tasaPlazoAcreditacion,
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
  
  // console.log("comisiones medio de pago es: "+comisionesMedioPago[medioPago])
  // console.log("medio de pago" + medioPago)



  // // Crear una clave para acceder a feePayment
  // const key = `${methodPayment}-${typePayment}`;
  // // Obtener la comisión basada en la combinación de methodPayment y typePayment
  // const fee = feePayment[key] || 0; // Si la combinación no está en feePayment, usar 0

  // Comision por plazo de acreditacion
  // const keyAcreditacion = tasaPlazoAcreditacion[plazoAcreditacion];

  // console.log("el plazo de acreditacion es: "+ plazoAcreditacion)
  // console.log("La tasa de acreditacion es: " + tasaPlazoAcreditacion)

  // setTasaPlazoAcreditacion(keyAcreditacion);
  // let nuevaComision = 0;
  // let feeAmount = 0;

  if (!monto) return 0;
  // const comision = parseFloat(((monto * comisionFee) * 1.21).toFixed(2));

  // Calculo comision dependiendo plazo acreditacion (tarjeta de crédito)
  if (medioPago == 3) {
    console.log(tasaPagoCuotas)
    //Calculo comisiones de usuario pago en cuotas
    const comisionUsuario = parseFloat((monto * (tasaPagoCuotas / 100)).toFixed(2));
    const totalAPagar = monto + comisionUsuario; 
    setMontoPagoCuotas((totalAPagar).toFixed(2));

    //Calculo comisiones de vendedor pago en cuotas
    const comisionTotal = parseFloat(((totalAPagar *(tasaPlazoAcreditacion*1.21)) ).toFixed(2));
    setComision(comisionTotal);
    const totalARecibir = monto - comisionTotal;
    setTasaComision((tasaPlazoAcreditacion*100).toFixed(2));
    return totalARecibir
} else {
    const comision = parseFloat(((monto * comisionFee) * 1.21).toFixed(2));
    setComision(comision);
    const totalARecibir = monto - comision;
    setTasaComision(comisionesFeeFixed);
    return totalARecibir  
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

  //Calculo para comisión

  // let totalAmount = 0;
  // const tasa = tasaCuotas / 100;
  // totalAmount = parseFloat(amount) - feeAmount;
  // const finalAmountFormateado = formatearNumeros(amount * tasa + amount);
  // setFinalAmount(finalAmountFormateado);
  // const totalAmountFormateado = formatearNumeros(totalAmount);
  // return totalAmountFormateado;
};

export default calculoDetalle;
