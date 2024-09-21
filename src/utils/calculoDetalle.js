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
  tasaPlazoAcreditacion
) => {
  const comisionFee = comisionesMedioPago[medioPago] || 0;
  const comisionesFeeFixed = (comisionFee * 100).toFixed(2);

  if (!monto) return 0;

  // Calculo comision dependiendo plazo acreditacion (tarjeta de crédito)
  if (medioPago == 3) {
    //Calculo comisiones de usuario pago en cuotas
    const comisionUsuario = parseFloat(
      (monto * (tasaPagoCuotas / 100)).toFixed(2)
    );
    const totalAPagar = Number(monto + comisionUsuario);
    setMontoPagoCuotas(totalAPagar.toFixed(2));

    //Calculo comisiones de vendedor pago en cuotas
    const comisionTotal = parseFloat(
      (totalAPagar * (tasaPlazoAcreditacion * 1.21)).toFixed(2)
    );
    setComision(comisionTotal);
    const totalARecibir = monto - comisionTotal;
    setTasaComision((tasaPlazoAcreditacion * 100).toFixed(2));
    return totalARecibir;
  } else {
    const comision = parseFloat((monto * comisionFee * 1.21).toFixed(2));
    setComision(comision);
    const totalARecibir = monto - comision;
    setTasaComision(comisionesFeeFixed);
    return totalARecibir;
  }
};
export default calculoDetalle;
