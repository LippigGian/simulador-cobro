// handle medio de pago (dinero en cuenta, tarjeta debito, tarjeta credito)
const handleMedioPago = (
  e,
  tipoOpcionesMedioPago,
  setMedioPago,
  setLabelPago,
  setCuotas,
  setCantidadCuotas,
  setTasaPagoCuotas,
  setPlazoAcreditacion,
  setTasaComision,
  setTasaPlazoAcreditacion
) => {
  const selectedOption = tipoOpcionesMedioPago.find(
    (option) => option.value === e
  );
  setLabelPago(selectedOption.label);
  setMedioPago(selectedOption.value);

  selectedOption.isCreditCard
    ? setCuotas(true)
    : (setCuotas(false),
      setPlazoAcreditacion("1"),
      setTasaPlazoAcreditacion(0.049),
      setTasaPagoCuotas("0.00"));
};

export default handleMedioPago;
