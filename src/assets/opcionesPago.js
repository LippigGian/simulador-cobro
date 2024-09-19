// paymentOptions.js


// Opciones de método de pago

export const OpcionesMediosPago = [
  { value: "1", label: "Dinero en cuenta" },
  { value: "2", label: "Tarjeta de débito" },
  { value: "3", label: "Tarjeta de crédito", isCreditCard: true },
];

export const paymentMethodOptions = [
  { value: "1", label: "QR" },
  { value: "2", label: "SmartPos" },
  { value: "3", label: "Lector Mini" },
  { value: "4", label: "Link de pago" },
  { value: "5", label: "Api de Cobro" }, //Este era cobro sin tarjeta
  { value: "6", label: "Tiendanube" },
  { value: "7", label: "Woocommerce" },
];

// Mapeo de methodPayment a posibles typePayment
export const paymentTypeOptions = {
  1: [ 
    { value: "1", label: "Dinero en cuenta" },
    { value: "2", label: "Tarjeta de débito" },
    { value: "3", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  2: [

    { value: "1", label: "Tarjeta de débito" },
    { value: "3", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  3: [

    { value: "1", label: "Tarjeta de débito" },
    { value: "3", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  4: [

    { value: "1", label: "Tarjeta de débito" },
    { value: "2", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  5: [

    { value: "1", label: "Tarjeta de débito" },
    { value: "2", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  6: [

    { value: "1", label: "Tarjeta de débito" },
    { value: "2", label: "Tarjeta de crédito", isCreditCard: true },
  ],
  7: [
    { value: "1", label: "Tarjeta de débito" },
    { value: "2", label: "Tarjeta de crédito", isCreditCard: true },
  ],
};

//Opciones de cuotas
export const installmentsOptions = [
  
  { value: "1", label: "1 cuota"},
  { value: "2", label: "3 cuotas" },
  { value: "3", label: "6 cuotas" },
  { value: "4", label: "9 cuotas" },
  { value: "5", label: "12 cuotas" },
  { value: "6", label: "Cuota Simple 3" },
  { value: "7", label: "Cuota Simple 6" },
  { value: "8", label: "Cuota simple 9" },
  { value: "9", label: "Cuota simple 12" },
];

//Opciones de plazo de acreditación
export const plazoAcreditacionOption = [
  
  { value: "1", label: "Acreditación en 2 días" },
  { value: "2", label: "Acreditación en 10 días" }
];