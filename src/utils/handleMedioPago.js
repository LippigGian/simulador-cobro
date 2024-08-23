// handle medio de pago (dinero en cuenta, tarjeta debito, tarjeta credito)
const handleMedioPago = (
  value,
  setTypePayment,
  paymentTypeOptions,
  methodPayment,
  setTipoPago,
  setCuotas,
  setCantidadCuotas,
  setTasaCuotas,
  setPlazoAcreditacion
) => {
  setTypePayment(value);

  const selectedOption = paymentTypeOptions[methodPayment].find(
    (option) => option.value === value
  );
  setTipoPago(selectedOption.label);
  selectedOption.isCreditCard
    ? setCuotas(true)
    : (setCuotas(false), setPlazoAcreditacion("1"));
};

export default handleMedioPago;
