//Handle cuotas
import formatearNumeros from "./formatearNumeros";
const handleCuotas = (
  value,
  feeUser,
  monto,
  setFinalAmount,
  setCantidadCuotas,
  setTasaCuotas
) => {
  const cuotas = value;
  // console.log("Las cuotas: " + cuotas);
  const fee = feeUser[cuotas] || 0;
  // setFeeCuotas(parseFloat(fee));

  const total = fee * amount + amount;
  setFinalAmount(formatearNumeros(total));
  setCantidadCuotas(cuotas);
  setTasaCuotas((fee * 100).toFixed(2));
};

export default handleCuotas;
