//Handle cuotas
import formatearNumeros from "./formatearNumeros";
const handleCuotas = (e, comisionesPorcuotas, setTasaPagoCuotas) => {
  const cuotas = e;
  const fee = comisionesPorcuotas[cuotas] || 0;
  setTasaPagoCuotas((fee * 100).toFixed(2));
};

export default handleCuotas;
