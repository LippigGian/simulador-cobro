// handle medio de pago (dinero en cuenta, tarjeta debito, tarjeta credito)
const handleMedioPago = (
   e,
  value,
  OpcionesMediosPago,
  setMedioPago,
  setLabelPago,
  // setTypePayment,
  // tipoOpcionesMedioPago,
  // methodPayment,
  setCuotas
  // setCantidadCuotas,
  // setTasaCuotas,
  // setPlazoAcreditacion
) => {


  const selectedOption = value.find(
    (option) => option.value === e)
  setLabelPago(selectedOption.label)
  console.log("la opcion seleccionada es: " +selectedOption.label)
  setMedioPago(selectedOption.value)
  console.log(selectedOption)
  selectedOption.isCreditCard
    ? setCuotas(true)
    : setCuotas(false);


  // selectedOption.isCreditCard
  //   ? setCuotas(true)
  //   : (setCuotas(false), setPlazoAcreditacion("1"));
  // setCantidadCuotas("1");
  // setTasaCuotas("0.00");
};

export default handleMedioPago;
