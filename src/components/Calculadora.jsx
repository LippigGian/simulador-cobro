import React from "react";
import Selector from "./Selector";
import MontoInput from "./MontoInput";

//Comisiones por cobro y por cobro en cuotas
import { feeUser, feeAcreditacion } from "../assets/comisiones";

//Medios de pago, tipos de pagos y cuotas
import {
  paymentMethodOptions,
  paymentTypeOptions,
  installmentsOptions,
  plazoAcreditacionOption,
} from "../assets/opcionesPago";

//Import de handles
import handleMedioCobro from "../utils/handleMedioCobro";
import handleMedioPago from "../utils/handleMedioPago";
import handleCuotas from "../utils/handleCuotas";
import handleMonto from "../utils/handleMonto";
import DetalleInfo from "./DetalleInfo";
import handlePlazoAcreditacion from "../utils/handlePlazoAcreditacion";

const Calculadora = ({
  amount,
  methodPayment,
  setMethodPayment,
  setTypePayment,
  setAmount,
  setCuotas,
  setCantidadCuotas,
  typePayment,
  typePaymentOptions,
  setTipoPago,
  cuotas,
  cantidadCuotas,
  setFinalAmount,
  setTasa,
  setTasaCuotas,
  receive,
  plazoAcreditacion,
  setPlazoAcreditacion,
  setTasaPlazoAcreditacion,
  formatearNumeros,
}) => {
  return (
    <>
      <div className="simuladorContainer_card">
        <MontoInput
          className="simuladorContainer_Card_inputMonto"
          label="Cobrás"
          amount={amount}
          onChange={(e) => handleMonto(e, setAmount, formatearNumeros)}
        />

        <Selector
          label="Medio de cobro"
          name="medioCobro"
          value={methodPayment}
          leyendaSelector="Elegí cómo querés cobrar."
          onChange={(e) =>
            handleMedioCobro(
              e,
              setMethodPayment,
              setTypePayment,
              setCuotas,
              setCantidadCuotas,
              setTipoPago,
              setTasa
            )
          }
          options={paymentMethodOptions}
        ></Selector>

        <Selector
          label="Medio de pago"
          name="medioPago"
          value={typePayment}
          leyendaSelector="Elegí cómo te van a pagar."
          onChange={(e) =>
            handleMedioPago(
              e,
              setTypePayment,
              paymentTypeOptions,
              methodPayment,
              setTipoPago,
              setCuotas,
              setTasaCuotas,
              setCantidadCuotas,
              setPlazoAcreditacion
            )
          }
          options={typePaymentOptions}
        ></Selector>
        {methodPayment !== "5" && cuotas ? (
          <>
            <Selector
              label="Cantidad de cuotas"
              name="cantidadCuotas"
              value={cantidadCuotas}
              leyendaSelector="Las cuotas corren a cargo del cliente."
              onChange={(e) =>
                handleCuotas(
                  e,
                  feeUser,
                  amount,
                  setFinalAmount,
                  setCantidadCuotas,
                  setTasaCuotas
                )
              }
              options={installmentsOptions}
            />
            <Selector
              label={"Plazo de pago"}
              value={plazoAcreditacion}
              onChange={(e) =>
                handlePlazoAcreditacion(
                  e,
                  setPlazoAcreditacion,
                  feeAcreditacion,
                  setTasaPlazoAcreditacion
                )
              }
              options={plazoAcreditacionOption}
              leyendaSelector="Elegí cómo recibís el dinero."
            ></Selector>
          </>
        ) : null}
        <hr></hr>
        <DetalleInfo
          primaryValue={`Recibís $` + receive}
          className={"recibis"}
        ></DetalleInfo>
      </div>
    </>
  );
};
export default Calculadora;
