// Handle tipo de pago (si es qr, tarjeta, etc)

const handleMedioCobro = (
  value,
  setMethodPayment,
  setTypePayment,
  setCuotas,
  setCantidadCuotas,
  setTipoPago,
  setTasa
) => {
  setMethodPayment(value);
  setTipoPago("");
  setTasa(0);
  setTypePayment("0");
  setCuotas(false);
  setCantidadCuotas("1");
};

export default handleMedioCobro;
