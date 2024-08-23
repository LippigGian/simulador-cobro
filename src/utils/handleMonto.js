// Handle monto ingresado
const handleMonto = (e, setAmount) => {
  const value = parseFloat(e.target.value);
  setAmount(value);
};

export default handleMonto;
