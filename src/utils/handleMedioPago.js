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
  // setTypePayment,
  // tipoOpcionesMedioPago,
  // methodPayment,

  // setCantidadCuotas,
  // setTasaCuotas,
  // setPlazoAcreditacion
) => {


  const selectedOption = tipoOpcionesMedioPago.find(
    (option) => option.value === e)
  setLabelPago(selectedOption.label)
  // console.log("la opcion seleccionada es: " +selectedOption.label)
  console.log(selectedOption.value)
  setMedioPago(selectedOption.value)
  // setTasaComision(0)
  

  // selectedOption.isCreditCard
  //   ? setCuotas(true)
  //   : setCuotas(false);

selectedOption.isCreditCard ? console.log("es tarjeta de credito") : console.log("no es tarjeta de credito")

  selectedOption.isCreditCard
    ? (setCuotas(true) )
    : (setCuotas(false), setPlazoAcreditacion("1"), setTasaPlazoAcreditacion(0.049), setTasaPagoCuotas("0.00"));
  // setCantidadCuotas(1);
  // setTasaPagoCuotas("0.00");
};

export default handleMedioPago;
