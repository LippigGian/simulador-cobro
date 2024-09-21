//Handle cuotas
import formatearNumeros from "./formatearNumeros";
const handleCuotas = (
  e,
  comisionesPorcuotas,
  setTasaPagoCuotas
  // feeUser,
  // monto,
  // setFinalAmount,
  // setCantidadCuotas,
  // setTasaCuotas
) => {
  const cuotas = e;

  console.log("Las cuotas: " + cuotas);
  const fee = comisionesPorcuotas[cuotas] || 0;
  
  setTasaPagoCuotas((fee * 100).toFixed(2));
  console.log("la comision por cuotas es : "+ fee)

  // setFeeCuotas(parseFloat(fee));

//   const total = fee * amount + amount;
//   setFinalAmount(formatearNumeros(total));
//   setCantidadCuotas(cuotas);
//   setTasaCuotas((fee * 100).toFixed(2));
 };

export default handleCuotas;
