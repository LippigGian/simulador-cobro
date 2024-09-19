import React from "react";
import Selector from "./Selector";
import MontoInput from "./MontoInput";

//Comisiones por cobro y por cobro en cuotas
import { feeAcreditacion, comisionesMedioPago, } from "../assets/comisiones";

//Medios de pago, tipos de pagos y cuotas
import {
  paymentMethodOptions,
  paymentTypeOptions,
  installmentsOptions,
  plazoAcreditacionOption,
  OpcionesMediosPago
} from "../assets/opcionesPago";

//Import de handles
// import handleMedioCobro from "../utils/handleMedioCobro";
import handleMedioPago from "../utils/handleMedioPago";
import handleCuotas from "../utils/handleCuotas";
import handleMonto from "../utils/handleMonto";
import DetalleInfo from "./DetalleInfo";
import handlePlazoAcreditacion from "../utils/handlePlazoAcreditacion";

const MainSimuladorInputs = ({
  // amount,
  monto,
  setMonto,
  formatearNumeros,
  OpcionesMediosPago,
  setMedioPago,
  labelPago,
  setLabelPago,
  tipoOpcionesMedioPago,
  // methodPayment,
  // setMethodPayment,
  // setTypePayment,
  // setAmount,
  cuotas,
  setCuotas,
  cantidadCuotas,
  comisionesPorcuotas
  // setCantidadCuotas,
  // typePayment,
  // typePaymentOptions,
  // cuotas,
  // cantidadCuotas,
  // setFinalAmount,
  // setTasa,
  // setTasaCuotas,
  // receive,
  // plazoAcreditacion,
  // setPlazoAcreditacion,
  // setTasaPlazoAcreditacion,
  
}) => {
  return (
    
    // <>
       <div className="simuladorContainer_card">
       <label className="titulo">Ingresá los datos de la venta</label>
        <MontoInput
           className="simuladorContainer_Card_inputMonto"
           label="Monto"
           monto={monto}
           onChange={(e) => handleMonto(e, setMonto, formatearNumeros)}
        />
        <Selector
         label="Medio de pago"
         name="medioPago"
        options={tipoOpcionesMedioPago}
        onChange={(e) =>
                  handleMedioPago(
                    e,
                    OpcionesMediosPago,
                    tipoOpcionesMedioPago,
                    setMedioPago,
                    setLabelPago,
                    setCuotas
                    // opcionesPago,
                    // setTypePayment,
                    // tipoOpcionesMedioPago,
                    // methodPayment,
                    // setCuotas,
                    // setCantidadCuotas,
                    // setTasaCuotas,
                    // setPlazoAcreditacion
                  )
                }
    >

        </Selector>

         {/* <Selector
    //       label="Medio de cobro"
    //       name="medioCobro"
    //       value={methodPayment}
    //       leyendaSelector="Elegí cómo querés cobrar."
    //       onChange={(e) =>
    //         handleMedioCobro(
    //           e,
    //           setMethodPayment,
    //           setTypePayment,
    //           setCuotas,
    //           setCantidadCuotas,
    //           setTipoPago,
    //           setTasa,
    //           setTasaCuotas
    //         )
    //       }
    //       options={paymentMethodOptions}
    //     ></Selector> */}
{/* 
    //     <Selector
    //       label="Medio de pago"
    //       name="medioPago"
    //       value={typePayment}
    //       leyendaSelector="Elegí cómo te van a pagar."
    //       onChange={(e) =>
    //         handleMedioPago(
    //           e,
    //           opcionesPago,
    //           setTypePayment,
    //           paymentTypeOptions,
    //           methodPayment,
    //           setTipoPago,
    //           setCuotas,
    //           setCantidadCuotas,
    //           setTasaCuotas,
    //           setPlazoAcreditacion
    //         )
    //       }
    //       options={typePaymentOptions}
    //     ></Selector>
     */}
        {cuotas ? (
          <>
          <h2>Hay cuotas</h2>
            <Selector
              label="Cantidad de cuotas"
              name="cantidadCuotas"
              value={cantidadCuotas}
              leyendaSelector="Las cuotas corren a cargo del cliente."
              onChange={(e) =>
                handleCuotas(
                  e,
                  comisionesPorcuotas
                  // feeUser,
                  // monto,
                  // setFinalAmount,
                  // setCantidadCuotas,
                  // setTasaCuotas
                )
              }
              options={installmentsOptions}
            />
            {/* <Selector
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
            ></Selector> */}
          </>
        ) : null}
    {/* //     <hr></hr>
    //     <DetalleInfo
    //       primaryValue={`Recibís $` + receive}
    //       className={"recibis"}
    //     ></DetalleInfo>  */}
        </div>
    // </>
  );
};
export default MainSimuladorInputs;
