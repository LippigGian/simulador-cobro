// Mapeo de comisiones basado en combinaciones de methodPayment y typePayment

export const comisionesMedioPago = {
  1: 0.008, //Dinero en cuenta
  2: 0.029, //Tarjeta de débito
  3: 0.049, //Tarjeta de crédito
}


export const feePayment = {
  "1-1": 0.008, // QR + Dinero en cuenta
  "1-2": 0.029, // QR + Tarjeta de débito
  "1-3": 0, // QR + Tarjeta de crédito
  "2-1": 0.029, // SmartPos  +Tarjeta de débito
  "2-2": 0, // SmartPos + Tarjeta de crédito
  "3-1": 0.029, // Lector Mini + Tarjeta de débito
  "3-2": 0, // Lector Mini + Tarjeta de crédito
  "4-1": 0.029, // Link de pago + Tarjeta de débito
  "4-2": 0, // Link de pago + Tarjeta de crédito
  "5-1": 0.029, // Api de Cobro + Tarjeta de débito
  "5-2": 0, // Api de Cobro + Tarjeta de crédito
  "6-1": 0.029, // Tiendanube + Tarjeta de débito
  "6-2": 0, // Tiendanube + Tarjeta de crédito
  "7-1": 0.029, // Woocommerce + Tarjeta de débito
  "7-2": 0, // Woocommerce + Tarjeta de crédito
};

//Mapeo de comisiones a los usuarios por pago en cuotas
export const comisionesPorcuotas = {
  1: 0, //1 cuota
  2: 0.1444, //3 cuotas
  3: 0.2346, //6 cuotas
  4: 0.3237, //12 cuotas
  5: 0.3920, //18 cuotas
  6: 0.0603, //3 cuotas simple
  7: 0.1145, //6 cuotas simple
  8: 0.1645, //9 cuotas simpe
  9: 0.2107, //12 cuotas simple
};
//Mapeo de comisiones de plazo de acreditación
export const comisionesPorAcreditacion = {
  1: 0.0490, //2 días para acreditar
  2: 0.0295 //10 días para acreditar
};
